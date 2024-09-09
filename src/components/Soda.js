import React from 'react'; 
import { Link } from 'react-router-dom';

function Soda() {
    return (
        <div>
            <h1>Here's your soda!</h1>
            <img src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29rZXxlbnwwfHwwfHx8MA%3D%3D" alt="Soda" />
            <Link to="/">Go back to the vending machine.</Link>
        </div>
    );
}

export default Soda;

