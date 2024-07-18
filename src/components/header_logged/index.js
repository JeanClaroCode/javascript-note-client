import React, { useEffect, useState } from "react";
import {
  Navbar,
  Dropdown,
  Icon,
  Button,
} from "react-bulma-components";
import logoImage from "../../assets/images/logo-white.png";
import "../../styles/header.scss";
import UsersService from "../../services/users";
import { Navigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";


function HeaderLogged(props) {
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [user, setUser] = useState(localStorage.getItem('user'))

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };

  
  const userName = localStorage.getItem('userName');

  const logOut = async () => {
    await UsersService.logout();
    setRedirectToHome(true);
  };

  if (redirectToHome) return <Navigate to="/" />;

  return (
    <Navbar className={`navbar-logged ${isActive ? 'is-active' : ''}`}>
      <Navbar.Brand>
        <Link to="/notes">
          <img src={logoImage} alt="logo" />
        </Link>
        <Navbar.Burger
          className="navbar-burger burger"
          aria-label="menu"
          data-target="navbar-menu"
          aria-expanded={isActive}
          onClick={handleBurgerClick}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Navbar.Burger>
      </Navbar.Brand>

      <Navbar.Menu className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <Navbar.Container renderAs="div" className="navbar-item navbar-start" align="start">
          <Navbar.Item renderAs="div">
          <Button className="open-button" color="white" outlined onClick={() => props.setIsOpen(true)}>
              <FontAwesomeIcon icon={faList}/>
          </Button>
          </Navbar.Item>
        </Navbar.Container>
        <Navbar.Container renderAs="div" align="right">
          <Navbar.Item renderAs="div">
            <Dropdown color="" label={`${JSON.parse(user)['name']} ▼`}>
              <Dropdown.Item value="User Edit">
                <Link to="/users/edit">User Edit</Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item value="LogOut">
                <a onClick={(e) => logOut()}>
                  LogOut
                </a>
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
}

export default HeaderLogged;
