import { useState } from "react";
// import logo from './logo.svg';

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Form,
  Label
} from "reactstrap";

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modal, setModal] = useState(true);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const dismiss = () => setModal(false);

  return (
    <div className="app">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className="my-menu-toggle" caret>
          Menu
        </DropdownToggle>
        <DropdownMenu className="my-menu">
          <DropdownItem className="my-dropdown-item">Dark mode</DropdownItem>
          <DropdownItem className="my-dropdown-item">Save locally</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Modal
        className="my-modal"
        isOpen={modal}
        modalTransition={{ timeout: 300 }}
        backdropTransition={{ timeout: 300 }}
      >
        <ModalHeader><h1>My Muse</h1></ModalHeader>
        <ModalBody>
          How it works: set your wordcount goal, set your milestones (every x number of words), and start writing. Don't stop until you've cleared all the milestones!
          <Form id="start-challenge">
            <Label>Wordcount goal: </Label>
            <Input type="number" placeholder="1667" />
            <Label>Milestones: </Label>
            <Input type="number" placeholder="250" />
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button className="my-modal-button" type="submit" form="start-challenge" color="success">
            start
          </Button>
          <Button className="my-modal-button" onClick={dismiss}>dismiss</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
