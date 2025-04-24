import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import orangeTriangle from "../../images/icons/orangeTriangle.png";

// import avantiLogo from "../../images/icons/avantiLogo.png";
import headerLogo from "../../images/icons/door2bin-header-logo3.png";
import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";
import Dropdown from "../Dropdown/Dropdown";
import SidebarDropdownItem from "../SidebarDropdown/SidebarDropdownItem/SidebarDropdownItem";

import { dropdownSidebarContentMenu } from "../../utils/constants";

import { SidebarData } from "../../utils/constants";

function Header({ handleOpenModal }) {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isSidebarDropdownOpen, setIsSidebarDropdownOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Check if the user has scrolled down
      if (window.scrollY > 0) {
        setHasScrolled(true); // Set state to true if scrolled
      } else {
        setHasScrolled(false); // Set state to false if at the top
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const divStyles = {
  //   backgroundColor: "white",
  //   width: "100%",
  //   height: "100px",
  //   position: "fixed",
  //   top: 0,
  //   left: 0,
  //   zIndex: 1000,
  //   transition: "box-shadow 0.3s ease, background 0.3s ease",
  //   boxShadow: hasScrolled ? "none" : "0px 5px 10px 0px rgba(0, 0, 0, 0.1)",
  //   background: hasScrolled
  //     ? "white"
  //     : "linear-gradient(to bottom, white 95%, rgba(211, 211, 211, 0.5) 100%)",
  // };

  const toggleSidebar = () => {
    setSidebar(!sidebar);
    setIsSidebarDropdownOpen(false);
  };
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) toggleSidebar();
  };
  const handleIsSidebarDropdownOpen = (operator) => {
    setIsSidebarDropdownOpen(operator);
  };

  const triangleButtonClassName = isDropdown
    ? "header__list-item-triangle-hovered"
    : null;

  return (
    <header className={hasScrolled ? "header scrolled" : "header"}>
      {/* <header style={divStyles}> */}
      <div
        className={
          hasScrolled ? "header__container scrolled" : "header__container"
        }
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#f5f0f0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img className="header__logo" src={headerLogo} alt="Avanti logo" />
        </Link>
        <div className="header__navbar-container">
          <ul className="header__navbar">
            {/* <li
            className={
              isDropdown
                ? "header__list-item-menu-hovered"
                : "header__list-item-menu"
            }
            onMouseEnter={() => setIsDropdown(true)}
            onMouseLeave={() => setIsDropdown(false)}
          >
            Soccer
            <button
              className={
                "header__list-item-triangle " + triangleButtonClassName
              }
              type="button"
            />
            {isDropdown && <Dropdown />}
          </li> */}

            <HeaderLink to="/about-us" text="About" />
            {/* <HeaderLink to="/pricing" text="Pricing" />
            <HeaderLink to="/reporting" text="Reporting" /> */}
            {/* <HeaderLink to="/soccer/mens/mls/fc-dallas" text="FC Dallas" /> */}
          </ul>

          <BookOnlineButton
            buttonText="Get A Quote"
            className="header__button"
            handleOpenModal={handleOpenModal}
            isArrowVisible={true}
            toggleSidebar={() => null}
          />
        </div>
      </div>

      <div
        className={hasScrolled ? "menu__container scrolled" : "menu__container"}
      >
        <div className="navbar">
          <Link to="/" style={{ textDecoration: "none", color: "#f5f0f0" }}>
            <img
              className="header__logo"
              src={headerLogo}
              alt="Tribuna Total's logo"
            />
          </Link>
          <FaIcons.FaBars className="menu-bars" onClick={toggleSidebar} />
        </div>
        <nav className={`nav-menu ${sidebar ? "active" : ""}`}>
          <div
            className={`nav-menu__backdrop ${
              sidebar ? "nav-menu__backdrop__open" : ""
            }`}
            onClick={handleOverlayClick}
          />
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <AiIcons.AiOutlineClose
                className="menu-bars"
                onClick={toggleSidebar}
              />
            </li>
            {/* <SidebarDropdownItem
              content={dropdownSidebarContentMenu}
              handleIsSidebarDropdownOpen={handleIsSidebarDropdownOpen}
              isSidebarDropdownOpen={isSidebarDropdownOpen}
              showSidebar={toggleSidebar}
            /> */}
            {SidebarData.map((item, index) => (
              <li key={index} className={item.cName} onClick={toggleSidebar}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
            <BookOnlineButton
              className="nav-menu__button"
              buttonText="GET A FREE QUOTE"
              handleOpenModal={handleOpenModal}
              toggleSidebar={toggleSidebar}
            />
          </ul>
        </nav>
      </div>
    </header>
  );
}

const HeaderLink = ({ to, text }) => (
  <Link to={to} style={{ textDecoration: "none", color: "#f5f0f0" }}>
    <li className="header__list-item">{text}</li>
  </Link>
);

export default Header;
