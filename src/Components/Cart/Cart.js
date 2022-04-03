import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context";
import Products from "../Products/Products";
import "./Cart.css";

const Cart = () => {
    const { carts } = useContext(CartContext);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        const totalPrice = carts.reduce(
            (acc, cur) => acc + Number(cur.price),
            0
        );
        setTotal(totalPrice);
    }, [carts]);
    return (
        <div>
            <h2>Cart Items: {carts.length}</h2>
            <h3>Cart Total Price: ${total}</h3>
            <div className="products-container">
                {carts.map((product) => (
                    <Products key={product.id} product={product}></Products>
                ))}
            </div>
        </div>
    );
};

export default Cart;
