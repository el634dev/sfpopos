// Display a list of spaces 
import React from "react";
// Importing data from JSON file
import data from '../../sfpopos-data.json';
// Adding the spaces
import POPOSSpace from "../POPOSSpace/POPOSSpace";
import './POPOSList.css';

function POPOSList() {
    // Add properties using deconstruction
    const spaces = data.map(({ title, address, images, hours }, i ) => {
        return (
            <POPOSSpace 
                //Prop for the Virtual DOM
                id={i}
                key={title}
                name={title}
                address={address}
                image={images[0]}
                hours={hours}
            />
        )
    })

    // -------------------------
    // Displaying public spaces
    return (
        <div className="POPOSList">
           { spaces }
        </div>
    );
}
    
export default POPOSList;
