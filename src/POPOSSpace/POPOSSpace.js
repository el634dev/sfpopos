// Display information about a public space
import React from "react";
// Import styling
import './POPOSSpace.css';

function POPOSSpace(props) {
    const { name, image, address, description, hours } = props;

    return (
        <div className="POPOSSpace">
            <h1 className="POPOSSpace_name">{name}</h1>
            <img src={`${process.env.PUBLIC_URL}images/${image}`} 
                alt={description}
                width="300" 
                height="300" 
                className="POPOSSpace_image"
            />
            <div className="POPOSSpace_address">
                { address }
            </div>
            <div className="POPOSSpace_hours">
                { hours }
            </div>
        </div>
    );
}

export default POPOSSpace;
