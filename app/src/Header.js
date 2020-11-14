import React, { useContext } from "react";
import {
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
      <Navbar className="mymuse-navbar" light>
       
        <NavbarToggler onClick={toggle} />
        
        <WordCounter /> 
        <NavbarBrand className="mymuse-navbarBrand">MyMuse</NavbarBrand>
      

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

     <HeaderModal />

     <MilestonesContainer />

     
    </div>
  );
}

export default Header;
