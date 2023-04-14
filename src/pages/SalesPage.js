import React from "react";
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";



export default function SalesPage(){

    const navStyles = {
        color: "red",
        listStyle: "none",
        textDecoration: "none",
    };

    return (   
       <Container>
        <ul className="nav-list">
        <li>
            Carrito: <span className="cart-count">0</span>
        </li>
        </ul>
           <nav>
            <Link to={"/"} style={navStyles}>
                <h2>Store</h2>
            </Link>
            <ul className="nav-list">
                <Link to={"/cart"} style={navStyles}>
                    <li>
                        Cart items: <span className="cart-count">0</span>
                    </li>
                </Link>
            </ul>
        </nav>
   
     
        </Container>
        
        
       
    );
};