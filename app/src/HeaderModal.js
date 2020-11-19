import React, { useContext } from "react";
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
import { StateContext } from "./contexts/StateContext";

function HeaderModal() {
  const { wordsPerLight, setWordsPerLight, modal, setModal } = useContext(
    StateContext
  );

  const dismiss = () => setModal(false);

  const updateWordsPerLight = (e) => setWordsPerLight(parseInt(e.target.value));

  const startWritingChallenge = (e) => {
    e.preventDefault();
    // remove the modal from the view
    dismiss();
    // focus the cursor inside the word editor
    document.querySelector("div[contentEditable]").focus();
  };
  return (
    <div className="header-modal">
      <Modal
        className="mymuse-modal"
        isOpen={modal}
        modalTransition={{ timeout: 300 }}
        backdropTransition={{ timeout: 300 }}
      >
        <ModalHeader>
          <h6>Welcome, Writer! </h6>
        </ModalHeader>
        <ModalBody>
          There are 10 lights that you need to power on by the pure, unstoppable
          magic of your written words!
          <Form id="start-challenge" onSubmit={startWritingChallenge}>
            <Label>How many words will it take to power one light?</Label>
            <Input
              type="number"
              value={wordsPerLight}
              onChange={updateWordsPerLight}
            />
          </Form>
          If you're struggling to get any writing done, it is recommended to
          choose a low number like 50 or 25, and once you have powered on all
          ten lights just start a new session.
          <br />
          <br />
          NOTE: as of now, this app has no backend, which means your words are
          not saved anywhere. You MUST copy your words at the end of each
          session and save them somewhere else.
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

export default HeaderModal;
