const { API_MAIL, MAIL_ME } = process.env;
const nodemailer = require("nodemailer");
const sendingTransport = require("nodemailer-sendinblue-transport");

async function sendMail(from, name, message) {
  const transporter = nodemailer.createTransport(
    new sendingTransport({
      apiKey: API_MAIL,
    })
  );

  await transporter.sendMail({
    from: from,
    to: MAIL_ME,
    subject: "nouveau de la société :" + name,
    text: message,
  });
}

module.exports = sendMail;
