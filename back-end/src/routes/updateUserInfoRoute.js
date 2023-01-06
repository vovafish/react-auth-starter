import jwt from "jsonwebtoken";
import { ObjectID } from "mongodb";
import { getDbConnection } from "../db";

export const updateUserInfoRoute = {
  path: "/api/users/:userId",
  method: "put",
  handler: async (req, red) => {
    const { authorization } = req.headers;
    const { userId } = req.params;

    const updates = ({ favoriteFood, hairColor, bio }) =>
      ({
        favoriteFood,
        hairColor,
        bio,
      }(req.body));

    if (!authorization) {
      return res.status(401).json({ message: "No authorization header sent" });
    }

    const token = authorization.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      //401 - user is not authenticated
      if (err)
        return res.status(401).json({ message: "Unable to verify token" });

      const { id } = decoded;

      if (id != userId)
        return res
          .status(403)
          .json({ message: "Not allowed to update that's data" });

      const db = getDbConnection("react-auth-db");
      const result = await db
        .collection("users")
        .findOneAndUpdate(
          { _id: ObjectID(id) },
          { $set: { info: updates } },
          { returnOriginal: false }
        );
      //get data from the actul mongo db objcet
      const { email, isVerified, info } = result.value;

      jwt.sign(
        { id, email, isVerified, info },
        process.env.JWT_SECRET,
        {
          expiresIn: "2d",
        },
        (err, token) => {
          if (err) {
            return res.status(200).json(err);
          }
          res.status(200).json({ token });
        }
      );
    });
  },
};
