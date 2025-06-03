const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
  debug: true, // Enable debug logging
});

// Verify transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log("Email configuration error:", error);
    console.log("Current email configuration:", {
      user: process.env.EMAIL_USERNAME,
      service: "gmail",
      // Don't log the password
    });
  } else {
    console.log("Email server is ready to send messages");
  }
});

// @desc    Submit contact form
// @route   POST /
// @access  Public
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, address, message } = req.body;

    // Create contact in database
    const contact = await Contact.create({
      name,
      email,
      phone,
      address,
      message,
    });

    // Send success email notification
    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: "manaswipatilmanu5@gmail.com",
      subject: "New Form Submission Details",
      html: `
        <h2>New Form Submission Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Message:</strong> ${message || "No message provided"}</p>
        <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    try {
      // Send email
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info.response);
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      console.error("Email configuration:", {
        user: process.env.EMAIL_USERNAME,
        service: "gmail",
        // Don't log the password
      });
    }

    res.status(201).json({
      success: true,
      data: contact,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
      error: error.message,
    });
  }
});

module.exports = router;
