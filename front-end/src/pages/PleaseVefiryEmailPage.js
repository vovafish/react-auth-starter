import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const PleaseVerifyEmailPage = () => {
  const history = useHistory("");

  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 3000);
  }, [history]);

  return (
    <div className="content-container">
      <h1>Thanks for signing up!</h1>
      <p>
        A varification email has been sent to the provided email. Please verify
        your email!
      </p>
    </div>
  );
};
