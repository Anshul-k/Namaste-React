import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Header = () => {
  const [btnValue, setBtnValue] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="Header">
      <div className="LogoContainer">
        <Link to="/">
          <img className="Logo" src={LOGO_URL} alt="logo" />
        </Link>
      </div>
      <div className="NavItems">
        <ul>
          <li>{onlineStatus ? "Online🟢" : "Offline🔴"}</li>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnValue === "Login"
                ? setBtnValue("Logout")
                : setBtnValue("Login");
            }}
          >
            {btnValue}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
