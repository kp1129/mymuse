import React, { useContext } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarToggler,
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { StateContext } from "./contexts/StateContext";
import HeaderModal from "./HeaderModal";
import MilestonesContainer from "./MilestonesContainer";
import WordCounter from "./WordCounter";

function Header() {
  const { dropdownOpen, setDropdownOpen } = useContext(StateContext);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="header">
      <Navbar color="faded" light>
       
        <NavbarToggler onClick={toggle} className="mr-2" />
        <NavbarBrand >my muse</NavbarBrand>

        <Collapse isOpen={dropdownOpen} navbar >
          <Nav className="mymuse-nav">
            <NavItem>
              <NavLink>
                Dark Mode
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                Save Locally
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        
      </Navbar>
       


      {/* <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className="mymuse-menu-toggle" caret>
          Menu
        </DropdownToggle>
        <NavbarToggler className="mr-2" />
        <DropdownMenu className="mymuse-menu">
          <DropdownItem className="mymuse-dropdown-item">Dark mode</DropdownItem>
          <DropdownItem className="mymuse-dropdown-item">Save locally</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <HeaderModal />

      <MilestonesContainer />

      <WordCounter /> */}
    </div>
  );
}

export default Header;
