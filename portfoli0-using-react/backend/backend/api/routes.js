// backend/routes/contacts.js
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const Contact = require("../models/Contact");

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// @route   POST api/contacts
// @desc    Create a contact form submission and send email
// @access  Public
router.post("/", async (req, res) => {
  const { name, email, address, phone, message } = req.body;

  try {
    // Create new contact
    const newContact = new Contact({
      name,
      email,
      address,
      phone,
      message,
    });

    // Save to database
    const contact = await newContact.save();

    // Email configuration
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "imanaswi.patil@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message || "No message provided"}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(201).json({ success: true, data: contact });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server Error" });
  }
});

module.exports = router;
