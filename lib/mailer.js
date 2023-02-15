const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendEmail(email, password) {
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: `"Administrator" <${process.env.EMAIL_FROM}>`,
    to: `${email}`,
    subject: `New account for ${process.env.APP_NAME}`,
    text: `username: ${email}\npassword: ${password}`,
    html: `<p>Username: ${email}<p><p>Password: ${password}`,
  });

  console.log(`Message sent: ${info.messageId}`);
}

module.exports = { sendEmail };
