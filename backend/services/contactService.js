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
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 0;">
    <tr>
      <td align="center">

        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,.08);">

          <tr>
            <td style="background:#0d6efd;padding:25px;text-align:center;color:white;">
              <h1 style="margin:0;font-size:26px;">Qubnix IT Solutions</h1>
              <p style="margin-top:8px;">Thank you for contacting us</p>
            </td>
          </tr>

          <tr>
            <td style="padding:35px;color:#333;line-height:1.7;">

              <h2 style="margin-top:0;">
                Hello ${name},
              </h2>

              <p>
                Thank you for contacting <strong>Qubnix IT Solutions</strong>.
              </p>

              <p>
                We have successfully received your inquiry.
              </p>

              <p>
                One of our consultants will review your requirements and
                get back to you within <strong>1 business day</strong>.
              </p>

              <p>
                If your request is urgent, simply reply to this email.
              </p>

              <hr style="border:none;border-top:1px solid #e5e5e5;margin:30px 0;">

              <h3>Our Services</h3>

              <ul style="padding-left:20px;">
                <li>Web Development</li>
                <li>AI Solutions</li>
                <li>Mobile Application Development</li>
                <li>Cloud Solutions</li>
                <li>UI/UX Design</li>
                <li>Digital Transformation</li>
              </ul>

              <p style="margin-top:30px;">
                Visit our website:
                <br>
                <a href="https://qubnixitsolutions.com"
                   style="color:#0d6efd;text-decoration:none;">
                  https://qubnixitsolutions.com
                </a>
              </p>

              <p>
                Best Regards,<br>
                <strong>Qubnix IT Solutions</strong><br>
                📧 sales@qubnixitsolutions.com
              </p>

            </td>
          </tr>

          <tr>
            <td style="background:#f7f7f7;padding:20px;text-align:center;font-size:12px;color:#777;">
              © 2026 Qubnix IT Solutions. All Rights Reserved.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>
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