import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Context from "./Context";
import { BrowserRouter } from "react-router-dom";
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

const render = () => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <Context>
                    <App />
                </Context>
            </React.StrictMode>
        </BrowserRouter>
    );
};
reportWebVitals();
render();
