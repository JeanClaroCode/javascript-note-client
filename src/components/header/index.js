import React, { useState } from 'react';
import { Navbar, Container, Columns} from "react-bulma-components";
import logoImage from '../../assets/images/logo.png';
import '../../styles/header.scss';
import { Link } from 'react-router-dom';

function Header() {
    const [isActive, setIsActive] = useState(false);

    const handleBurgerClick = () => {
        setIsActive(!isActive);
    };

    return (
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <Link to='/'>
                        <img src={logoImage} alt="Logo" />
                    </Link>
                    <Navbar.Burger
                        className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded={isActive}
                        data-target="navbarMenu"
                        onClick={handleBurgerClick}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Navbar.Burger>
                </Navbar.Brand>

                <Navbar.Menu id="navbarMenu" className={isActive? 'is-active' : ''}>
                    <Navbar.Container renderAs="div" className="navbar-item navbar-end" align="right">
                        <Columns>
                            <Columns.Column>
                                <Link to="/register" className="button register-button">
                                    Register
                                </Link>
                            </Columns.Column>
                            <Columns.Column>
                                <Link to="/login" className="button login-button">
                                    Login
                                </Link>
                            </Columns.Column>
                        </Columns>

                    </Navbar.Container>
                </Navbar.Menu>
            </Container>
        </Navbar>
    );
}

export default Header;