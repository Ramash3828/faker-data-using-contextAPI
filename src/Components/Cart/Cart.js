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
            <div className="cart-heading">
                <h2>Cart Total Price: ${total}</h2>
                <hr />
            </div>
            <div className="products-container">
                {carts.length === 0 ? (
                    <h2 className="empty">Cart is empty!!!</h2>
                ) : (
                    carts.map((product) => (
                        <Products key={product.id} product={product}></Products>
                    ))
                )}
            </div>
        </div>
    );
};

export default Cart;
