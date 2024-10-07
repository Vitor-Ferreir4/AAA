import React from 'react';
import '../CSS/Nav.css'
// Define the App component
function Nav() {
    return(
        <nav>
            <ul>
                <li><a href="/ProductForm">Home</a></li>
                <li><a href="/EditProduct">About</a></li>
                <li><a href="/ProductList">Contact</a></li>
            </ul>
        </nav>
    )


}

export default Nav;