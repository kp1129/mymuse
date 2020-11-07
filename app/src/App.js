import { useState } from 'react';
// import logo from './logo.svg';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function App() {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);


  return (
    <div className="app">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} >
        <DropdownToggle className="my-menu-toggle" caret>Menu</DropdownToggle>
        <DropdownMenu className="my-menu">
          <DropdownItem className="my-dropdown-item">Dark mode</DropdownItem>
          <DropdownItem className="my-dropdown-item">Save locally</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default App;
