import { useState } from "react";
import { useHistory } from "react-router-dom";

export const LogInPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const onLogInClicked = async () => {
    alert("Login");
  };

  return (
    <div className="content-container">
      <h1>Log In</h1>
      {/* If error msg exist display it */}
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <input
        placeholder="someone@gmail.com"
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <button disabled={!emailValue || !passwordValue} onClick={onLogInClicked}>
        Log In
      </button>
      <button onClick={() => history.push("/forgot-password")}>
        Forgot Your Password?
      </button>
      <button onClick={() => history.push("/signup")}>
        Don't have an account? Sign Ups!
      </button>
    </div>
  );
};
