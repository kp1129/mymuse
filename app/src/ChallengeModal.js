import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Form,
  Label,
} from "reactstrap";

function ChallengeModal() {
  const [modal, setModal] = useState(true);
  const dismiss = () => setModal(false);
  return (
    <div className="challenge-modal">
      <Modal
        className="mymuse-modal"
        isOpen={modal}
        modalTransition={{ timeout: 300 }}
        backdropTransition={{ timeout: 300 }}
      >
        <ModalHeader>
          <h1>My Muse</h1>
        </ModalHeader>
        <ModalBody>
          How it works: set your wordcount goal, set your milestones (every x
          number of words), and start writing. Don't stop until you've cleared
          all the milestones!
          <Form id="start-challenge">
            <Label>Wordcount goal: </Label>
            <Input type="number" placeholder="1667" />
            <Label>Milestones: </Label>
            <Input type="number" placeholder="250" />
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            className="mymuse-modal-button"
            type="submit"
            form="start-challenge"
            color="success"
          >
            start
          </Button>
          <Button className="mymuse-modal-button" onClick={dismiss}>
            dismiss
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ChallengeModal;
