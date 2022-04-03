import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import SpinnerLoader from "./Components/SpinnerLoader/SpinnerLoader";

function App() {
    return (
        <div>
            <Header></Header>
            <SpinnerLoader></SpinnerLoader>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/cart" element={<Cart></Cart>}></Route>
            </Routes>
        </div>
    );
}

export default App;
