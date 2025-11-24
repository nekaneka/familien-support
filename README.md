<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/temp/1

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## How to add real contact emails and payments

Die App zeigt aktuell nur Demo-Overlays. So stattest du die beiden Formulare mit echten Backends aus:

### Kontaktformular: E-Mail-Versand einbauen
1. **Formulardaten auslesen:** Ersetze in `components/Contact.tsx` den `handleSubmit`-`setTimeout` durch das Auslesen der Felder (`name`, `email`, `message`) und formState (`isLoading`, `error`).
2. **API-Route anlegen:** Richte einen Server-/Serverless-Endpunkt ein (z. B. `src/api/contact.ts`, Next.js `pages/api/contact.ts` oder Express-Route `/api/contact`).
3. **Validieren:** Prüfe im Handler Pflichtfelder und E-Mail-Format; breche mit `400` ab, wenn etwas fehlt.
4. **Mail versenden:** Binde einen Maildienst wie Resend, SendGrid oder SMTP ein und sende den Inhalt an euer Team (z. B. `info@familiensupport.at`). Hinterlege Zugangsdaten in `.env` und lade sie serverseitig.
5. **Response & Feedback:** Gib `200` bei Erfolg zurück. Im Frontend die Antwort prüfen, Erfolgsoverlay zeigen und bei Fehlern eine Meldung rendern.
6. **Spam-Schutz:** Optional Honeypot-Feld, Rate-Limit oder Captcha ergänzen.

### Mitgliedschaft/Spende: Zahlungs-Flow ergänzen
1. **Zahlungsanbieter wählen:** Stripe, Mollie oder PayPal mit SEPA/Karte und optional wiederkehrenden Zahlungen.
2. **Checkout-Endpunkt:** Serverroute wie `/api/checkout-session` erstellen. Sie liest Betrag, Produkttitel (z. B. „Fördermitgliedschaft 45 € / Jahr“ oder Spendenbetrag) und Kundendaten aus dem Formular.
3. **Session anlegen:** Im Handler per Anbieter-SDK eine Checkout-Session bzw. PaymentIntent erzeugen und die Session-ID als JSON zurückgeben.
4. **Frontend-Aufruf:** Ersetze in `components/Membership.tsx` den `setTimeout` durch einen `fetch` auf den Endpunkt. Nach Erfolg `stripe.redirectToCheckout({ sessionId })` oder den Anbieter-Redirect ausführen. Lade-/Fehlerzustände im Button anzeigen.
5. **Webhook verarbeiten:** Eine Webhook-Route (z. B. `/api/stripe/webhook`) validiert Signaturen und markiert erfolgreiche Zahlungen; optional Datenbankeintrag und Bestätigungs-Mail.
6. **.env pflegen:** API-Keys, Webhook-Secrets und Absenderadressen niemals im Client bundlen.
