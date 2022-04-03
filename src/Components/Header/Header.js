import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../Context";
import "./Header.css";

const Header = () => {
    const { carts } = useContext(CartContext);
    return (
        <div className="header">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cart">Cart ({carts.length})</NavLink>
        </div>
    );
};

export default Header;
