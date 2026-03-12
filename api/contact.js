import mongoose from "mongoose";
import Contact from "../backend/models/Contact.js";
import nodemailer from "nodemailer";

let isConnected = false;

async function dbConnect() {
  if (isConnected) return;

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not set in environment variables");
  }

  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    await dbConnect();

    const { name, email, phone, address, message } = req.body || {};

    const contact = await Contact.create({
      name,
      email,
      phone,
      address,
      message,
    });

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
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error("Error sending email:", emailError);
    }

    return res.status(201).json({
      success: true,
      data: contact,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
      error: error.message,
    });
  }
}

