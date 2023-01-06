import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = ({ to, from, subjcet, text, html }) => {
  const msg = { to, from, subjcet, text, html };
  return sendgrid.send(msg);
};
