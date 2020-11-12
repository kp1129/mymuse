import React from 'react'

function Milestone({ item, show }) {
    return (
        <div className={show ? "milestone" : "milestone hidden_milestone"}>
            {item}
        </div>
    )
}

export default Milestone
