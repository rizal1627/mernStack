import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductData from "./components/product/ProductData";
import ProductSection from "./components/product/ProductSection";
import EditPorduct from "./components/product/EditProduct";
import AddPorduct from "./components/product/AddPorduct";
import ProductList from "./components/product/ProductList";
import Home from "./components/Home";
import UserList from "./components/users/UserList";
import AddUser from "./components/users/UserList";
import React from "react";
import CategorySection from "./components/category/CatgeorySection";
import CartSection from "./components/cart/CartSection";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productdata" element={<ProductData />} />
        <Route path="/productsection" element={<ProductSection />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/add" element={<AddPorduct />} />
        <Route path="/edit/:id" element={<EditPorduct />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/addusers" element={<AddUser />} />

        <Route path="/category" element={<CategorySection />} />


        <Route path="/cart" element={<CartSection />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
