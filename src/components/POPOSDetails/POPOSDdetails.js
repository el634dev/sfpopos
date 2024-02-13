// Display details in a way where the user can re-vist or bookmark
import React from "react";
import { useParams } from 'react-router';
// Importing data from JSON file
import data from '../../sfpopos-data.json';
// Styling
import './POPOSDetails.css';

function POPOSDetails(props) {
    const params = useParams();
    // Location index
    const { id } = params;
    // Deconstruct the data
    const { images, title, desc, hours, features, geo } = data[id];

    return (
        <div className="POPOSDetails">
            <div className="POPOSDetails-image">
                <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} alt={title} />
            </div>
            {/**********/}
            {/* POPOS Info */}
            <div className="POPOSDetails-info">
                <h1 className="POPOSDetails-title">
                    { title }
                </h1>
                {/* POPOS Details */}
                <p className="POPOSDetails-desc">
                    { desc }
                </p>
                {/* POPOS Hours */}
                <p className="POPOSDetails-hours">
                    { hours }
                </p>
                {/* POPOS Features */}
                <p className="POPOSDetails-features">
                    { features }
                </p>
                {/* POPOS Geo */}
                <p className="POPOSDetails-geo">
                    { geo.lat } { geo.lon }
                </p>
            </div>
        </div>
    );
}

export default POPOSDetails;
