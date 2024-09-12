import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import Logo from "../assets/BiteBuddy.png";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnValue, setBtnValue] = useState("Login");
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  const headerItems = [
    { content: "Home", link: "/" },
    { content: "About", link: "/about" },
    { content: "Contact", link: "/contact" },
    {
      content: (
        <>
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          {cartItems.length > 0 ? <span>({cartItems.length})</span> : null}
        </>
      ),
      link: "/Cart",
    },
  ];

  return (
    <div className="p-4 px-8 flex flex-wrap justify-between shadow-md sticky top-0 z-50 bg-white rounded-md items-center">
      <div className="w-16 md:w-20">
        <Link to="/">
          <img src={Logo} alt="logo" loading="lazy" />
        </Link>
      </div>
      <button
        onClick={() =>
          sidebarVisible ? setSidebarVisible(false) : setSidebarVisible(true)
        }
        className="text-3xl font-sans md:hidden block font-semibold cursor-pointer text-gray-600 hover:text-orange-400"
      >
        {sidebarVisible ? (
          <i class="fa fa-times" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-bars" aria-hidden="true"></i>
        )}
      </button>
      <div
        className={`w-full md:flex md:items-center md:w-auto ${
          sidebarVisible ? "" : "hidden"
        }`}
      >
        <ul className="pt-6 md:flex md:gap-6 md:justify-between md:pt-0">
          {headerItems.map((navItems, i) => {
            return (
              <li
                key={i}
                onClick={() =>
                  sidebarVisible
                    ? setSidebarVisible(false)
                    : setSidebarVisible(true)
                }
                className="font-semibold text-xl font-sans text-gray-600 hover:text-orange-400 my-2 md:my-0"
              >
                <Link className="link" to={navItems.link}>
                  {navItems.content}
                </Link>
              </li>
            );
          })}
          <button
            className="font-semibold text-xl font-sans text-orange-400 hover:text-orange-300 my-2 md:my-0"
            onClick={() => {
              btnValue === "Login"
                ? setBtnValue("Logout")
                : setBtnValue("Login");
            }}
          >
            {btnValue}
          </button>
          <li className="font-semibold text-base font-sans cursor-not-allowed text-gray-600 my-2 md:my-0">
            {onlineStatus ? "🟢" : "🔴"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
