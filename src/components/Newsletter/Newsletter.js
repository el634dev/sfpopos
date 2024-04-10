import React from 'react';

function Newsletter() {
     return (
        <div>
            <h2>Join Our Mailing List!</h2>
            <small>Sign up to recieve the latest updates, new spaces, and more.</small>
            <form>
                <label>Email:</label>
                <input type='text' />
                {/* Name Input Field */}
                <label>Name:</label>
                <input type='text' />
                {/* Submit Button */}
                <button type='submit'>Join</button>
            </form>
        </div>
    );
}

export default Newsletter;
