import React from "react";
import { Link } from "react-router-dom";
import './Style.css'

const Navbar = () => {
    return (
        <div className="Navbar__h-11 p-2 bg-slate-100 shadow-xl">
            <div className="container">
            <Link to="/" className="text-black font-bold py-2 px-4 rounded-lg" >Jon Shop</Link>
            <div className="inline ">
                <Link to="/productsection" className=" text-black m-2" >Produk</Link>
                <Link to="/category" className=" text-black m-2" >Category</Link>
                <Link to="/cart" className=" text-black m-2" >Cart</Link>
            </div>
            </div>
        </div>
    )
}

export default Navbar;

