import React from 'react';

const Image = props => (
    <div className="img-container">
        {/* <p>img</p> */}
        <img src={(process.env.PUBLIC_URL + props.image)} alt= {props.name} />

    </div>
)
export default Image;