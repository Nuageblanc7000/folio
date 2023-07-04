const yup = require("yup");
const messages = require("./message");

const schemaMessage = yup.object().shape({
  name: yup.string().nonNullable(messages.required).required(messages.required),
  email: yup
    .string()
    .email("Veuillez insérer un email valide")
    .required(messages.required),
  message: yup.string().required(messages.required),
});

module.exports = schemaMessage;
