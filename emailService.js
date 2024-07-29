const nodemailer = require('nodemailer');
require('dotenv').config();


const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  }
});

// Send an email
const sendMail = async (to, subject, text) => {
  try {
    let info = await transporter.sendMail({
      from: `"Dhanraj" <${process.env.EMAIL_USER}>`, 
      to:"dhanraj.kushwah007@gmail.com",
      subject:"Send Email by Node mailer",
      text:"Hello How are you?",
      html: "<b>Hello world?</b>", 
      attachments: [
        {
          filename: 'Dhanrajk.pdf', 
          path: 'path/to/Dhanrajk.pdf', 
        },
        {
          filename: 'image.png', 
          path: 'path/to/image.jpg',
        },
      ],
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = { sendMail };
