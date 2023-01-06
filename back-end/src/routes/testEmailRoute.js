import { sendEmail } from "../util/sendEmail";

export const testEmailRoute = {
  path: "/api/test-email",
  method: "post",
  handler: async (req, res) => {
    try {
      await sendEmail({
        to: "vladimirrybakov123@gmail.com",
        from: "P2601563@my365.dmu.ac.uk",
        subjcet: "Does this work?",
        text: "Yeah! It's works",
      });
      res.sendStatus(200);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  },
};
