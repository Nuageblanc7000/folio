const { API_MAIL, MAIL_ME } = process.env;
const nodemailer = require("nodemailer");
const Transport = require("nodemailer-brevo-transport");

function sendMail(from, name, message) {
  const transporter = nodemailer.createTransport(
    new Transport({
      apiKey: API_MAIL,
    }),
    {
      tls: {
        rejectUnauthorized: false,
      },
    }
  );

  transporter.sendMail({
    from: from,
    to: MAIL_ME,
    subject: "nouveau de la société :" + name,
    text: message,
  });
}

module.exports = sendMail;
