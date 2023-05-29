const yup = require("yup");
const messages = require("./message");

const schemaTechnology = yup.object().shape({
  title: yup
    .string()
    .nonNullable(messages.required)
    .required(messages.required)
    .min(2, "Minimum deux caractères"),
  icon: yup.string(),
});

module.exports = schemaTechnology;
