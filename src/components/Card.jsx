import React from 'react';
import Image from './Image';
import './FriendCard.css';
// import images from '../images.json'

const Card = props => (

            <div className="card">
                <span onClick={() => props.handleSelectImage(props.id)} className="select">
                    {/* <p>card</p> */}
                    <Image
                        image={props.image}
                        name={props.name} />
                </span>
            </div>
      
)
    export default Card