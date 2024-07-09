import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
