import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnValue, setBtnValue] = useState("Login");

  return (
    <div className="Header">
      <div className="LogoContainer">
        <img className="Logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="NavItems">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
