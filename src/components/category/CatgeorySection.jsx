import React from "react";
// import ProductList from "./ProductList";
import Navbar from "../Navbar";
import Category from "./CategoryPage";

const ProductSection = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
            <h1 className="w-full my-5 mx-2 text-xl font-extrabold">Halaman Kategori</h1>
            <Category />
            </div>
        </div>
    )
}

export default ProductSection;

