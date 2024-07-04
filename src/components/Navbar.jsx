
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import { BiSolidLogOut } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { BsInfoCircleFill } from 'react-icons/bs';
import { MdSell } from 'react-icons/md';
import { logout } from "../features/cartSlice";
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector, useDispatch } from "react-redux";
import { NotificationContainer, NotificationManager } from 'react-notifications';

function NavBar() {
  const islog = useSelector((state) => state.cart.isAuthenticated);
  const isad=useSelector((state) =>state.cart.role);
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const handleClick = () => setClick(!click);
  const ha = () => {
    NotificationManager.warning(
      `click here to confirm lofout`,
      'logout',
      7000,
      () => {
        dispatch(logout());
      },
      {
        className: 'custom-notification' // Apply custom CSS class
      })
  };
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/models"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact "
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
            {(isad ==1) ?(
              <li className="nav-item">
              <NavLink
                exact
                to="/admin"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Admin
              </NavLink>
            </li>
            ): (islog) ? (<NavLink
            exact
            to="/udb"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Dashbord
          </NavLink>) : null
          }
            {!islog ? (
  <>
    <li className="nav-item">
      <NavLink
        exact
        to="/login"
        activeClassName="active"
        className="nav-links"
        onClick={handleClick}
      >
        Login
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink
        exact
        to="/sigin"
        activeClassName="active"
        className="nav-links"
        onClick={handleClick}
      >
        Signup
      </NavLink>
    </li>
  </>
) : (
<li className="nav-item">
      <Dropdown>
        <Dropdown.Toggle variant="light" id="user-dropdown"  onClick={() => { ha() }}>
          <AiOutlineUser />&nbsp; Logout
        </Dropdown.Toggle>
      </Dropdown>
    </li>
)}
          </ul>

          {/* Buttons for Sign in and Register */}
          {/* <div className="auth-buttons">
            <button className="auth-button">Sign In</button>
            <button className="auth-button">Register</button>
          </div> */}

          {/* Mobile hamburger icon */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
