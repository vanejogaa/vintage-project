import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

export const Item = ({name, price, id, imgUrl}) => {
    
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        setCart((increaseItem)=> {
            const isItemsFound = increaseItem.find((item) => item.id === id);
            if(isItemsFound){
                return increaseItem.map((item) => {
                    if(item.id === id){
                        return {...item,quantity: item.quantity + 1};
                    } else {
                        return item;
                    }
                });
                } else {
                    return [...increaseItem, {id, quantity: 1, price: price}];
                }
            });
    };

    const removeItem = (id) => {
        setCart((increaseItem)=> {
            if(increaseItem.find((item) => item.id === id)?.quantity === 1){
                return increaseItem.filter((item) => item.id !== id);
            } else {
                return increaseItem.map((item) => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity -1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    return (
    
    <div className="item-box">
    <div>{name}</div>
    <img src={imgUrl} alt={''} width="215" height="255"/>
    <div className="item-price">{price}€</div>
    <button className="item-add-button" onClick={() => addToCart()}>
    +Add to card
    </button>
    </div>
    );
};