import React from "react";
// import { Link } from "react-router-dom";
import ProductData from "./product/ProductData";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div className="Home">
            <Navbar />
            {/* <button aria-label="Toggle navigation" aria-expanded="false" type="button" data-view-component="true" class="Header-link js-details-target btn-link">    <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-three-bars">
                <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
                </svg>
            </button> */}
            <div className="container">
            <h1 className="w-40 my-5 mx-2 text-xl font-extrabold">Home Page Dashboard</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim repellendus tempore veniam eos dignissimos architecto iure facere ut id eaque in nam itaque laboriosam dolor repudiandae, saepe possimus unde totam?</p>
            <ProductData />
            </div>
        </div>
    )
}

export default Home;

