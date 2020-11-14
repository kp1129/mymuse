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
            if (newMilestonesRemaining.length === 1) {
                setNextMilestone(wordsWritten + newMilestonesRemaining[0])
            } else {
                setNextMilestone(wordsWritten + challengeMilestone);
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
