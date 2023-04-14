import React from "react";
import Itemcard from "../Itemcard";

const SalesPage = () => {
    return (   
        <div>
            <h1 className="text-center mt-3">All Items</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    <Itemcard />
                </div>
            </section>
        </div>

     
       
    );
};

export default SalesPage;