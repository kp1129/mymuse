import React, { useContext, useEffect } from 'react';
import { StateContext } from './contexts/StateContext';

function WordCounter() {
    const { wordsWritten, challengeMilestone, nextMilestone, setNextMilestone, milestonesRemainingRef, setMilestonesRemaining } = useContext(StateContext);

    useEffect(() => {
        if (wordsWritten >= nextMilestone) {
            // remove next milestone
            const newMilestonesRemaining = [...milestonesRemainingRef.current];
            newMilestonesRemaining.shift();
            milestonesRemainingRef.current = newMilestonesRemaining;
            setMilestonesRemaining(newMilestonesRemaining);

            // calculate next milestone
            // alreadyWrittenFactor exists to allow correct calculation in case
            // the user pastes the words in instead of writing them
            const alreadyWrittenFactor = Math.floor(wordsWritten / challengeMilestone);
            if (newMilestonesRemaining.length === 1) {                
                setNextMilestone((alreadyWrittenFactor * challengeMilestone )+ newMilestonesRemaining[0]);
            } else {
                setNextMilestone((alreadyWrittenFactor * challengeMilestone) + challengeMilestone);
            }
        }
    }, [wordsWritten])

    return (
        <div className="wordcounter">
            {wordsWritten}
        </div>
    )
}

export default WordCounter
