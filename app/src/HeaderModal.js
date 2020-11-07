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
  } = useContext(StateContext);
  // const [modal, setModal] = useState(true);
  const dismiss = () => setModal(false);

  // const [challengeGoal, setChallengeGoal] = useState(1667);
  const updateChallengeGoal = (e) => setChallengeGoal(parseInt(e.target.value));
  // const [challengeMilestone, setChallengeMilestone] = useState(250);
  const updateChallengeMilestone = (e) =>
    setChallengeMilestone(parseInt(e.target.value));

  // const [milestonesRemaining, setMilestonesRemaining] = useState();

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
          <h1>My Muse</h1>
        </ModalHeader>
        <ModalBody>
          How it works: set your wordcount goal, set your milestones (every x
          number of words), and start writing. Don't stop until you've cleared
          all the milestones!
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
        {console.log("does this ever load?")}
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
