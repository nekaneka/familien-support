import { createServer } from 'node:http';

const {
  RESEND_API_KEY,
  CONTACT_RECIPIENT = 'info@familiensupport.at',
  CONTACT_FROM = 'Familien Support <no-reply@familiensupport.at>',
  ALLOWED_ORIGIN = '*',
  PORT = '8788',
} = process.env;

const parseBody = async (req) => {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const raw = Buffer.concat(chunks).toString('utf8');
  try {
    return JSON.parse(raw || '{}');
  } catch (error) {
    console.error('JSON parse failed', error);
    return {};
  }
};

const sendEmail = async ({ name, email, message }) => {
  if (!RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY fehlt.');
  }

  const payload = {
    from: CONTACT_FROM,
    to: [CONTACT_RECIPIENT],
    reply_to: email,
    subject: `Neue Kontaktanfrage von ${name}`,
    text: `${message}\n\nAntwort an: ${email}`,
  };

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Resend API error: ${response.status} - ${body}`);
  }
};

const server = createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method !== 'POST' || req.url !== '/api/contact') {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
    return;
  }

  const body = await parseBody(req);
  const { name, email, message } = body;

  if (!name || !email || !message) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Name, E-Mail und Nachricht sind erforderlich.' }));
    return;
  }

  try {
    await sendEmail({ name, email, message });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true }));
  } catch (error) {
    console.error('E-Mail Versand fehlgeschlagen', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Versand fehlgeschlagen. Bitte später erneut versuchen.' }));
  }
});

server.listen(Number(PORT), () => {
  console.log(`Kontakt-Server läuft auf http://localhost:${PORT}`);
});
