import React from 'react';

const YourScore = props => (
    <div>
        <span
            className="currentScore">
            {props.counter}
        </span>
    </div>
)

export default YourScore;