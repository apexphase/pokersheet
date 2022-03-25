import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/">
        <div className="App-header"></div>
      </Link>
      <nav className="Link-box">
        <Link to="/list" className="Link-box-link">
          The List
        </Link>
        <Link to="/payouts" className="Link-box-link">
          Payout Structure
        </Link>
        <Link to="/pokerstars" className="Link-box-link">
          Pokerstars Information
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
