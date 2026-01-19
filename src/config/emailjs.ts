// EmailJS Configuration
// Get these values from your EmailJS dashboard: https://www.emailjs.com/
// 1. Create an account at emailjs.com
// 2. Add your email service (Gmail, Outlook, custom SMTP, etc.)
// 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{company}}, {{phone}}, {{message}}
// 4. Copy your Service ID, Template ID, and Public Key below

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // e.g., 'service_abc123'
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // e.g., 'template_xyz789'
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // e.g., 'abc123xyz789'
};

// Email template example for EmailJS:
// Subject: New Contact from {{from_name}}
// Body:
// Name: {{from_name}}
// Email: {{from_email}}
// Company: {{company}}
// Phone: {{phone}}
// Message: {{message}}
