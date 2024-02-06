// Display information about a space
import React from "react";

function POPOSSpace(props) {
    const { name, image, address } = props
    return (
        <div>
            <img src={`${process.env.PUBLIC_URL}/images/${image}`} 
                alt='50 California St.' 
                width="300" 
                height="300" 
            />
            <h1>{name}</h1>
            <div>
                {address}
            </div>
        </div>
    );
}

export default POPOSSpace;
