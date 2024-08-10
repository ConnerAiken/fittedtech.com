import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const POST = async (req) => {
  console.log(req);
  try {
    // Parse the request body
    const { name, email, message, subject, phone } = await req.json();

    // Validate the form data
    if (!name || !email || !message || !subject || !phone) {
      return new NextResponse(JSON.stringify({ error: "All fields are required." }), { status: 400 });
    }

    // Handle the form submission (e.g., save to a database or send an email)
    await transporter.sendMail({
      from: '"Fitted Tech" <contact@fittedtech.com>', // sender address
      to: process.env.CONTACT_FORM_RECIPIENTS, // list of receivers
      subject: `You have a new Fitted Tech contact inquiry!`, // Subject line
      text: `Subject: ${subject}\n\n${message}\n\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`, // plain text body
    });

    // Send a success response
    return new NextResponse(JSON.stringify({ message: "Message sent successfully." }), { status: 200 });
  } catch (error) {
    // Handle any errors
    return new NextResponse(JSON.stringify({ message: "An error occurred while submitting the form.." }), { status: 500 });
  }
};
