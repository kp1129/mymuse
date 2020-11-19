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
  const {
    wordsPerLight,
    setWordsPerLight,
    challengeGoal,
    challengeMilestone,
    modal,
    setModal,
    setChallengeGoal,
    setChallengeMilestone,
    setMilestonesRemaining,
    setNextMilestone,
  } = useContext(StateContext);

  const dismiss = () => setModal(false);

  const updateWordsPerLight = (e) => setWordsPerLight(parseInt(e.target.value));

  // const updateChallengeGoal = (e) => setChallengeGoal(parseInt(e.target.value));

  // const updateChallengeMilestone = (e) =>
  //   setChallengeMilestone(parseInt(e.target.value));

  // const calculateMilestones = () => {
  //   const mainMilestones = Math.floor(challengeGoal / challengeMilestone);
  //   const finalMilestone = challengeGoal % challengeMilestone;

  //   const milestonesToClear = [];
  //   for (let i = 0; i < mainMilestones; i++) {
  //     milestonesToClear.push(challengeMilestone);
  //   }
  //   if (finalMilestone > 0) {
  //     milestonesToClear.push(finalMilestone);
  //   }
  //   setMilestonesRemaining(milestonesToClear);
  //   setNextMilestone(challengeMilestone);
  // };

  const startWritingChallenge = (e) => {
    e.preventDefault();
    
    dismiss();    
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
          <h5>Welcome, Writer! </h5>
        </ModalHeader>
        <ModalBody>
          How it works: <br/>
          Decide how many words it will take to power one light, and then write until you turn on all 10 lights! 
          <Form id="start-challenge" onSubmit={startWritingChallenge}>
            <Label>Number of words to power one light:</Label>
            <Input
              type="number"
              value={wordsPerLight}
              onChange={updateWordsPerLight}
            />            
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

export default HeaderModal;
