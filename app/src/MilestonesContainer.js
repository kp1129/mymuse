import React, { useContext } from 'react';
import { StateContext } from './contexts/StateContext';
import Milestone from './Milestone';

function MilestonesContainer() {

    const { milestonesRemaining } = useContext(StateContext);

    return (
        <div className="milestones-container">
            {milestonesRemaining?.map((item, ix) => {
                if (ix < 7) return <Milestone item={item} show={true} />
                return <Milestone item={item} show={false} />
                })}
        </div>
    )
}

export default MilestonesContainer
