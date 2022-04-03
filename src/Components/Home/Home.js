import faker from "@faker-js/faker";

import { useState } from "react";
import Products from "../Products/Products";

import "./Home.css";

const Home = () => {
    const productArray = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        img: faker.image.business(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
    }));
    const [products] = useState(productArray);
    return (
        <div className="products-container">
            {products.map((product) => (
                <Products key={product.id} product={product}></Products>
            ))}
        </div>
    );
};

export default Home;
