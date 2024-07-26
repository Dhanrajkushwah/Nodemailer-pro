const nodemailer = require('nodemailer');
require('dotenv').config();

// Configure the transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like Yahoo, Outlook, etc.
  auth: {
    user: 'mahimagarg1602@gmail.com',
    pass: 'uixv laul bjpd tqcc'

  }
});

// Send an email
const sendMail = async (to, subject, text) => {
  try {
    let info = await transporter.sendMail({
      from: `"Dhanraj" <${process.env.EMAIL_USER}>`, // sender address
      to: "dhanraj.kushwah007@gmail.com",
      subject: "Email Task", // Subject line
      text: "Hello How are you. Nodemailer is a module for Node.js applications to allow easy as cake email sending", // plain text body
      html: "<b>Hello world?</b>", 
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = { sendMail };
