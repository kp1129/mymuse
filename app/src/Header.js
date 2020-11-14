import React, { useContext } from "react";
import {
  NavbarToggler,
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { StateContext } from "./contexts/StateContext";
import HeaderModal from "./HeaderModal";
import MilestonesContainer from "./MilestonesContainer";
import WordCounter from "./WordCounter";

function Header() {
  const { dropdownOpen, setDropdownOpen, darkMode, setDarkMode } = useContext(StateContext);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const darkModeToggle = () => setDarkMode((prevState) => !prevState);
  return (
    <div className={darkMode ? "header-dark" : "header-light"}>
      {darkMode ? (
        <Navbar className="mymuse-navbar-dark" dark>
          <NavbarToggler onClick={toggle} />
          <WordCounter />
          <NavbarBrand className="mymuse-navbarBrand">MyMuse</NavbarBrand>
          <Collapse isOpen={dropdownOpen} navbar>
            <Nav className="mymuse-nav">
              <NavItem >
      <NavLink onClick={darkModeToggle}>Light Mode</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      ) : (
        <Navbar className="mymuse-navbar-light" light>
          <NavbarToggler onClick={toggle} />
          <WordCounter />
          <NavbarBrand className="mymuse-navbarBrand">MyMuse</NavbarBrand>
          <Collapse isOpen={dropdownOpen} navbar>
            <Nav className="mymuse-nav">
              <NavItem>
                <NavLink onClick={darkModeToggle}>Dark Mode</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      )}
      <HeaderModal />
      <MilestonesContainer />
    </div>
  );
}

export default Header;
