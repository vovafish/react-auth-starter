import { useHistory } from "react-router-dom";

export const PasswordResetSuccess = () => {
  const history = useHistory();

  return (
    <div className="content-cotainer">
      <h1>Success!</h1>
      <p>You password has been reseted, please login with the new password</p>
      <button onClick={() => history.push("/login")}>Log In</button>
    </div>
  );
};
