import React from 'react';

const TopScore = props => (
    <div>
        <span
            className="topScore">
            {props.topScore}
        </span>
    </div>
)

export default TopScore;