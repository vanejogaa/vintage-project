import React from "react";
import { ItemList } from '../components/ItemList';
/*import { Navbar } from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";*/
import { ShoppingCart } from "../components/ShoppingCart";
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";



export default function SalesPage(){

    const navStyles = {
        color: "red",
        listStyle: "none",
        textDecoration: "none",
    };

    return (

        /*<Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<ItemList/>}/>
                <Route path='/cart' element={<ShoppingCart/>}/>
            </Routes>
        </Router>*/
        
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
   
        <ItemList/>
        <ShoppingCart/>
        </Container>
        
        
       
    );
};