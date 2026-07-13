const config = require("../config/env")
const nodemailer = require('nodemailer')

// Reusable transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.ADMIN_EMAIL,
    pass: config.EMAIL_PASSWORD,
  },
});

async function sendInquiryEmails(contactData) {

  const { name, email, phone, company, service, message, budget, timeline } = contactData;

  // 2. Define email options
  const adminMailOptions = {
    from: config.ADMIN_EMAIL,
    to: config.ADMIN_EMAIL,
    subject: `New Service Inquiry from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Service:</strong> ${service || 'Not specified'}</p>
      <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
      <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  const userMailOptions = {
    from: config.ADMIN_EMAIL,
    to: email,
    subject: 'We received your inquiry - Qubnix IT Solutions',
    html: `
      <h2>Thank you for reaching out to Qubnix IT Solutions!</h2>
      <p>Hi ${name},</p>
      <p>We have received your inquiry and will get back to you within 24 hours.</p>
      <p>Our team is excited to discuss how we can help transform your business.</p>
      <p>Best regards,<br>Qubnix IT Solutions Team</p>
    `,
  };

  // 3. Send emails concurrently
  await Promise.all([
    transporter.sendMail(adminMailOptions),
    transporter.sendMail(userMailOptions),
  ]);

  return {
    success: true,
    message: 'Your inquiry has been sent successfully! We will contact you soon.',
  };
}

module.exports = { sendInquiryEmails };