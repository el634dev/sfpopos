// Display information about a public space
import React from "react";
import './POPOSSpace.css';

function POPOSSpace(props) {
    const { name, image, address } = props
    return (
        <div className="POPOSSpace">
            <img src={`${process.env.PUBLIC_URL}/images/${image}`} 
                alt='50 California St.' 
                width="300" 
                height="300" 
                className="POPOSSpace_image"
            />
            <h1 className="POPOSSpace_name">{name}</h1>
            <div className="POPOSSpace_address">
                {address}
            </div>
        </div>
    );
}

export default POPOSSpace;
