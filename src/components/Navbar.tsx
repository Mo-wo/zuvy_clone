import React, { useState } from "react";
import logo from "../images/zuvyLogo_no-bg.png";
import navStyles from "../styles/navbar.module.css";
import { HashLink } from 'react-router-hash-link';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";


const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleClick = () => {
    setOpenNav(!openNav);
  };

  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.navContent}>
        <img
          className={openNav ? navStyles.imgClose : navStyles.img}
          src={logo}
          alt="Zuvy Logo"
        />
        <img className={navStyles.img2} src={logo} alt="Zuvy Logo" />

        <div className={openNav ? navStyles.menuIcons2 : navStyles.menuIcons}>
          <button onClick={handleClick} className={navStyles.hamburger}>
            {openNav ? (
              <div className={navStyles.closeIcon}>
                <CloseIcon sx={{ fontSize: "30px", textAlign: "center" }} />
              </div>
            ) : (
              <MenuIcon sx={{ fontSize: "30px", textAlign: "center" }} />
            )}
          </button>
        </div>
        <div
          className={
            openNav
              ? navStyles.navMenu
              : `${navStyles.collapsedNav} ${navStyles.navMenu}`
          }
        >
          <ul className={navStyles.ul}>
            <li className={navStyles.li} onClick={handleClick}>
              <HashLink to="/">Home</HashLink>
            </li>
            <li className={navStyles.li} onClick={handleClick}>
              <HashLink to="/#howItWorks">How It works</HashLink>
            </li>
            <li className={navStyles.li} onClick={handleClick}>
              <HashLink to="/#features">Features</HashLink>
            </li>
            <li className={navStyles.li} onClick={handleClick}>
              <HashLink to="/#faq">FAQs</HashLink>
            </li>
          </ul>
          <HashLink
            className={navStyles.navLink}
            to="/#joinwaitlist"
            onClick={handleClick}
          >
            <span>Join the Waitlist</span>
          </HashLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
