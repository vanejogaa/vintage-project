import React from "react";
import Itemcard from "../Itemcard";
import data from "../data.js";
import Cart from "../Cart";
import { CartProvider } from "react-use-cart";

const SalesPage = () => {
    console.warn(data.productData)
    return (   
        <div>
            <h1 className="text-center mt-3">All Items</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {data.productData.map((item, index)=>{
                        return(
                            <Itemcard 
                            img={item.img} 
                            title={item.title} 
                            desc={item.desc} 
                            price={item.price} 
                            item={item} 
                            key={index}
                            />
                        )
                    })}
                    
                </div>
            </section>
            <CartProvider/>
            <Cart/>
        </div>

     
       
    );
};

export default SalesPage;