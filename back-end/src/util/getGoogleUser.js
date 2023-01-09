import axios from "axios";
import { oauth2 } from "googleapis/build/src/apis/oauth2";
import { oauthClient } from "./oauthClient";

const getAccessAndBearerTokenUrl = ({ accessToken }) => `
    http://www.googleaips.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}
`;

export const getGoogleUser = async ({ code }) => {
  const { token } = await oauthClient.getToken(code);
  const response = await axios.get(
    getAccessAndBearerTokenUrl({ accessToken: tokens.access_token }),
    { headers: { Authorization: `Bearer ${tokens.id_token}` } }
  );

  return response.data;
};
