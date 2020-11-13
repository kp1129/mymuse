import React, { useContext } from 'react';
import { StateContext } from './contexts/StateContext';

function WordCounter() {
    const { wordsWritten } = useContext(StateContext);

    return (
        <div className="wordcounter">
            {wordsWritten}
        </div>
    )
}

export default WordCounter
