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
import LightsContainer from "./LightsContainer";
import WordCounter from "./WordCounter";

function Header() {
  const { dropdownOpen, setDropdownOpen, darkMode, setDarkMode } = useContext(
    StateContext
  );
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const darkModeToggle = () => setDarkMode((prevState) => !prevState);
  return (
    <div className={darkMode ? "header-dark" : "header-light"}>
      <Navbar
        className={darkMode ? "mymuse-navbar-dark" : "mymuse-navbar-light"}
        light={!darkMode}
        dark={darkMode}
      >
        <NavbarToggler onClick={toggle} />
        <WordCounter />
        <NavbarBrand className="mymuse-navbarBrand">MyMuse</NavbarBrand>
        <Collapse isOpen={dropdownOpen} navbar>
          <Nav className="mymuse-nav">
            <NavItem>
              <NavLink onClick={darkModeToggle}>
                {darkMode ? "Light Mode" : "Dark Mode"}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://forms.gle/vdRznmvEESQTuhbh9"
                target="_blank"
              >
                Report a Bug
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://forms.gle/98KUnpyP8gvxkZ6m8"
                target="_blank"
              >
                Suggest a Feature
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <HeaderModal />
      <LightsContainer />
    </div>
  );
}

export default Header;
