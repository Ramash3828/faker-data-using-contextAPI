// import React, { useContext } from "react";

import { useContext } from "react";
import { CartContext } from "../../Context";
import "./Products.css";

const Products = ({ product }) => {
    const { img, name, price } = product;
    const { carts, setCarts } = useContext(CartContext);

    return (
        <div className="product">
            <img src={img} alt={name} /> <h4>Name: {name}</h4>
            <p>Price: ${price}</p>
            {carts.includes(product) ? (
                <button
                    onClick={() => {
                        setCarts(carts.filter((pd) => pd.id !== product.id));
                    }}
                >
                    Remove from Cart
                </button>
            ) : (
                <button
                    onClick={() => {
                        setCarts([...carts, product]);
                    }}
                >
                    Add to cart
                </button>
            )}
        </div>
    );
};

export default Products;
