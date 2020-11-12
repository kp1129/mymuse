import React, { useContext } from 'react';
import { StateContext } from './contexts/StateContext';
import Milestone from './Milestone';

function MilestonesContainer() {

    const { milestonesRemaining } = useContext(StateContext);

    return (
        <div className="milestones-container">
            {milestonesRemaining?.map(item => <Milestone item={item}/>)}
        </div>
    )
}

export default MilestonesContainer
