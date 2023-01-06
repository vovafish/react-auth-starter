import { sendEmail } from "../util/sendEmail";

export const testEmailRoute = {
  path: "/api/test-email",
  method: "post",
  handler: async (req, res) => {
    try {
      await sendEmail({
        to: "shaun.linkedin.learning+test1@gmail.com",
        from: "shaun.linkedin.learning@gmail.com",
        subject: "Does this work?",
        text: "If you're reading this... yes!",
      });
      res.sendStatus(200);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  },
};

/*
        to: "vladimirrybakov123+test1@gmail.com",
        from: "P2601563@my365.dmu.ac.uk",
        */
