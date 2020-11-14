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

  const updateChallengeGoal = (e) => setChallengeGoal(parseInt(e.target.value));

  const updateChallengeMilestone = (e) =>
    setChallengeMilestone(parseInt(e.target.value));

  const calculateMilestones = () => {
    const mainMilestones = Math.floor(challengeGoal / challengeMilestone);
    const finalMilestone = challengeGoal % challengeMilestone;

    const milestonesToClear = [];
    for (let i = 0; i < mainMilestones; i++) {
      milestonesToClear.push(challengeMilestone);
    }
    if (finalMilestone > 0) {
      milestonesToClear.push(finalMilestone);
    }
    setMilestonesRemaining(milestonesToClear);
    setNextMilestone(challengeMilestone);
  };

  const startWritingChallenge = (e) => {
    e.preventDefault();
    calculateMilestones();
    dismiss();
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
          <h5>Welcome, Writer! Your Muse awaits!</h5>
        </ModalHeader>
        <ModalBody>
          How it works: set your wordcount goal, set your milestones (every x
          number of words), and start writing.
          <br />
          <br />
          For example, write 1667 words in one session, with a milestone after
          every 250 words.
          <br />
          <br /> Don't stop until you've cleared all the milestones!
          <br />
          <br />
          <Form id="start-challenge" onSubmit={startWritingChallenge}>
            <Label>Wordcount goal: </Label>
            <Input
              type="number"
              value={challengeGoal}
              onChange={updateChallengeGoal}
            />
            <Label>Milestones: </Label>
            <Input
              type="number"
              value={challengeMilestone}
              onChange={updateChallengeMilestone}
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
