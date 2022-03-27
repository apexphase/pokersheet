import SignedInContext from "./SignedInContext";

const Login = () => {
  if (SignedInContext._currentValue === "false") {
    SignedInContext.Provider = "true";
  } else {
    SignedInContext.Provider = "false";
  }
};

export default Login;
