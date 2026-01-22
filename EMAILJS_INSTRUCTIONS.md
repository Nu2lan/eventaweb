# EmailJS Configuration Guide

To make the contact form work, you need to configure EmailJS. Follow these steps:

1.  **Sign Up / Login**: Go to [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/) and create an account.
2.  **Add Email Service**:
    *   Go to "Email Services".
    *   Add a new service (e.g., Gmail).
    *   Connect your account.
    *   Copy the **Service ID** (e.g., `service_xyz123`).

3.  **Create Email Template**:
    *   Go to "Email Templates".
    *   Create a new template.
    *   In the Subject line, put something like: `New Event Proposal from {{user_name}}`.
    *   In the Content, use these variables to capture form data:
        ```html
        <p>You have received a new proposal request:</p>
        <ul>
            <li><strong>Name:</strong> {{user_name}}</li>
            <li><strong>Company:</strong> {{company_name}}</li>
            <li><strong>Email:</strong> {{user_email}}</li>
            <li><strong>Phone:</strong> {{user_phone}}</li>
            <li><strong>Event Type:</strong> {{event_type}}</li>
            <li><strong>Date:</strong> {{event_date}}</li>
        </ul>
        <p><strong>Message:</strong></p>
        <p>{{message}}</p>
        ```
    *   Save the template.
    *   Copy the **Template ID** (e.g., `template_abc456`).

4.  **Get Public Key**:
    *   Go to "Account" (click your avatar in top right).
    *   Copy the **Public Key** (e.g., `user_123456789`).

5.  **Update the Code**:
    *   Open `src/pages/RequestProposal.tsx`.
    *   Replace the placeholder values in the `handleSubmit` function with your actual IDs:
        ```javascript
        const SERVICE_ID = 'YOUR_SERVICE_ID'; 
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
        ```

That's it! Your form will now send emails directly to your inbox.
