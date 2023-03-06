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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim repellendus tempore veniam eos dignissimos architecto iure facere ut id eaque in nam itaque laboriosam dolor repudiandae, saepe possimus unde totam?</p>
            <ProductData />
            </div>
        </div>
    )
}

export default Home;

