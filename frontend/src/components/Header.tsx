import styles from "../styles/components/header.module.css";
import logo from "../assets/images/icons/AIT_logo_B⁄W.png";
import { NavLink } from "react-router-dom";
// import { Link } from "react-scroll";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);


  return (
    <>
      <div
        className={`${styles.navMobile} ${
          isNavOpen ? styles.open : styles.hide
        }`}
      >
        {/* <section> */}
        <IoClose
          className={styles.close}
          onClick={() => {
            setIsNavOpen(false);
          }}
        />
        {/* </section> */}
        <nav>
          {/* <Link
            className={styles.mobileLink}
            to={"/home"}
            onClick={navItemHandle}
          >
            Home
          </Link>
          <Link
            className={styles.mobileLink}
            to={"/about"}
            onClick={navItemHandle}
            offset={80}
          >
            About
          </Link>
          <Link
            className={styles.mobileLink}
            to={"/departments"}
            onClick={navItemHandle}
          >
            Events
          </Link>
          <Link
            className={styles.mobileLink}
            to={"/passes"}
            onClick={() => {
              navigate("/getPass");
            }}
          >
            Get Passes
          </Link>
          <Link
            className={styles.mobileLink}
            to={"/sponsors"}
            onClick={navItemHandle}
          >
            Sponsers
          </Link>
          <Link
            className={styles.mobileLink}
            to={"/location"}
            onClick={navItemHandle}
          >
            Location
          </Link> */}
          <NavLink
            to={"/"}
            className={({isActive})=>isActive ? styles.active : styles.inactive}
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({isActive})=>isActive ? styles.active : styles.inactive}
          >
            About
          </NavLink>
          <NavLink
            to={"/departments"}
            className={({isActive})=>isActive ? styles.active : styles.inactive}
          >
            Events
          </NavLink>
          <NavLink
            to={"/sponsors"}
            className={({isActive})=>isActive ? styles.active : styles.inactive}
          >
            Sponsers
          </NavLink>
          <NavLink
            to={"/location"}
            className={({isActive})=>isActive ? styles.active : styles.inactive}
          >
            Location
          </NavLink>
          
        </nav>
      </div>
      <div className={styles.container}>
        <img src={logo} alt="Tech Fest" className={styles.logo} />
        <IoMenu
          className={styles.menu}
          onClick={() => {
            setIsNavOpen(true);
          }}
        />
        <nav className={styles.navDesktop}>
          <NavLink
            to={"/"}
            className={({isActive})=>isActive ? styles.active : styles.inactive}
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({isActive})=>isActive ? styles.active : styles.inactive}
          >
            About
          </NavLink>
          <NavLink
            to={"/sponsors"}
            className={({isActive})=>isActive ? styles.active : styles.inactive}
          >
            Contacts
          </NavLink>
          <NavLink
            to={"/location"}
            className={({isActive})=>isActive ? styles.active : styles.inactive}
          >
            Location
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Header;
