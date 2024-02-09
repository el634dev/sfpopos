// Display details in a way where the user can re-vist or bookmark

// React Libraries
import React from "react";
import { useParams } from 'react-router';
// Importing data from JSON file
import data from '../../sfpopos-data.json';

function POPOSDetails(props) {
    const params = useParams();
    // Location index
    const { id } = params;
    // Deconstruct the data
    const { images, title, desc, hours, features, geo } = data[id];

    return (
        <div>
            <div>
                <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} alt={title} />
            </div>
            {/**********/}
            {/* POPOS Details */}
            <div>
                <h1>{ title }</h1>
                <p>{ desc }</p>
                <p>{ hours }</p>
                <p>{ features }</p>
                <p>{ geo.lat } { geo.lon }</p>
            </div>
        </div>
    );
}

export default POPOSDetails;
