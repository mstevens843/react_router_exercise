import React from 'react'; 
import { Link } from 'react-router-dom'; 


function Candy() {
    return (
        <div>
            <h1>Here's your Candy!</h1>
            <img src='https://images.unsplash.com/photo-1499195333224-3ce974eecb47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuZHl8ZW58MHx8MHx8fDA%3D' alt="Candy" />
            <Link to="/">Go back to the vending machine!</Link>
        </div>
    );
}

export default Candy;


