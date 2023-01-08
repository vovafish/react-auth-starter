import { useHistory } from "react-router-dom";

export const PasswordResetFail = () => {
  const history = useHistory();

  return (
    <div className="content-cotainer">
      <h1>Uh.. oh..!</h1>
      <p>Something went wrong... Please try again!</p>
      <button onClick={() => history.push("/login")}>Log In</button>
    </div>
  );
};
