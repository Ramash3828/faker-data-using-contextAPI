import { createContext, useState } from "react";

export const CartContext = createContext();

const Context = ({ children }) => {
    const [carts, setCarts] = useState([]);
    return (
        <CartContext.Provider value={{ carts, setCarts }}>
            {children}
        </CartContext.Provider>
    );
};

export default Context;
