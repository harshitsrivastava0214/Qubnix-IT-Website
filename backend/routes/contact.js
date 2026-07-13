const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

// Email Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

router.post('/send', async (req, res) => {
  try {
    const { name, email, phone, company, service, message, budget, timeline } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: 'Please fill all required fields' });
    }

    // Save to database
    const contact = new Contact({
      name,
      email,
      phone,
      company,
      service,
      message,
      budget,
      timeline
    });

    await contact.save();

    // Send email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sales@qubnixitsolutions.com',
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
      `
    };

    // Send confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We received your inquiry - Qubnix IT Solutions',
      html: `
        <h2>Thank you for reaching out to Qubnix IT Solutions!</h2>
        <p>Hi ${name},</p>
        <p>We have received your inquiry and will get back to you within 24 hours.</p>
        <p>Our team is excited to discuss how we can help transform your business.</p>
        <p>Best regards,<br>Qubnix IT Solutions Team</p>
      `
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.json({ 
      success: true, 
      message: 'Your inquiry has been sent successfully! We will contact you soon.' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Failed to send inquiry. Please try again.' });
  }
});

module.exports = router;