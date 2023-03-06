import React from "react";
// import { Link } from "react-router-dom";
import ProductData from "./product/ProductData";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div className="Home">
            <Navbar />
            <div className="container">
            <h1 className="w-40 my-5 mx-2 text-xl font-extrabold">Home Page Dashboard</h1>
            <ProductData />
            </div>
        </div>
    )
}

export default Home;

