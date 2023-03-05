import React from "react";
// import ProductList from "./ProductList";
import Navbar from "../Navbar";
import Cart from "./CartPage";

const CartSection = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
            <h1 className="w-full my-5 mx-2 text-xl font-extrabold">Halaman Keranjang</h1>
            <Cart />
            </div>
        </div>
    )
}

export default CartSection;

