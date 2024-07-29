const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const { sendMail } = require('./emailService');

const app = express();
const port = 3000;


app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  if (!to || !subject || !text) {
    return res.status(400).json({ error: 'Please provide to, subject, and text' });
  }

  try {
    await sendMail(to, subject, text);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
