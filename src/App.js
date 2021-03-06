import "./App.css";
import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Breadcrumb, Container, Image } from "react-bootstrap";
import Logo from "./pokerlogo.png";
import SignedInContext from "./SignedInContext";
import Login from "./Login";

function App() {
  var SignInLink = "Sign In";
  if (SignedInContext._currentValue === "false") {
    SignInLink = "Sign In";
  } else {
    SignInLink = "Sign Out";
  }
  return (
    <SignedInContext.Provider value="false">
      <Container sm>
        <Image className="App-header" src={Logo} />
        <Breadcrumb md="auto" className="Link-box">
          <Breadcrumb.Item>
            <Link to="/">The List</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/payouts">Payout Structure</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/list">Pokerstars Information</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <div onClick={Login()}>{SignInLink}</div>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Outlet />
      </Container>
    </SignedInContext.Provider>
  );
}

export default App;
