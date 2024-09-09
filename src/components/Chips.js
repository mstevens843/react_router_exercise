import React from 'react'; 
import { Link } from 'react-router-dom';

function Chips() {
    return (
        <div>
           <h1>Here's your chips!</h1>
           <img src="https://plus.unsplash.com/premium_photo-1680086903412-d9e00eb08af5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpcHN8ZW58MHx8MHx8fDA%3D" alt="Chips" />
           <Link to="/">Go back to the vending machine</Link>
        </div>
    );
}

export default Chips; 

