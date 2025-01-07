import { Link } from "react-router-dom";
import "./index.scss";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      <ul>
        <li>
          <Link to="/working-version">No CSP</Link>
          <span>Widget should load</span>
        </li>
        <li>
          <Link to="/strict-csp">CSP JS</Link>
          <span>Widget should NOT load</span>
        </li>
        <li>
          <Link to="/no-fonts">CSP FONTS</Link>
          <span>Font will not work</span>
        </li>
        <li>
          <Link to="/no-http">XMLHttpRequest CSP</Link>
          <span>HTTP reqeust will not work</span>
        </li>
      </ul>
    </div>
  );
};

export default Home;
