import React from 'react';
import './Newsletter.css';

function Newsletter() {
     return (
        <div>
            <h1>Join Our Mailing List!</h1>
            <h3>Sign up to recieve the latest updates, new spaces, and more.</h3>
            <form className='newsletter'>
                <label>Email</label>
                <input type='text' placeholder='Enter your email'/><br />
                {/* Name Input Field */}
                <label>Name</label>
                <input type='text' placeholder='Enter your name'/>
                {/* Submit Button */}<br />
                <button type='submit'>Join</button>
            </form>
        </div>
    );
}

export default Newsletter;
