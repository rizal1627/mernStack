/* eslint-disable no-template-curly-in-string */
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useSWR, {useSWRConfig} from "swr";

const ProductList = () => {
    const {mutate} = useSWRConfig();
    const fetcher = async () => {
        const response = await axios.get('http://localhost:3001/products')
        return response.data
    }
    const {data} = useSWR('products', fetcher)
    if(!data) return <h2>Loading ...</h2>
    
    const deleteProduct = async (productId) => {
        const del = await axios.delete(`http://localhost:3001/products/${productId}`)
        mutate('products')
        console.log(del)
    }
    return (
        <div className="#">
            <div className="w-full">
                <Link to="/add" className="bg-green-300 hover:bg-green-500 border border-slate-300 text-white font-bold py-2 px-4 rounded-lg" >Add New</Link>
                <div className="relative shadow rounded-lg mt-3">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-grey-700 uppercase bg-slate-100">
                            <tr>
                                <th className="py-3 px-1 text-center">No</th>
                                <th className="py-3 px-6">Product Name</th>
                                <th className="py-3 px-6">Price</th>
                                <th className="py-3 px-1 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((product, index)=>(    
                            <tr className="bg-white border-b" key={product.id}>
                                <td className="py-3 px-1 text-center">{index+1}</td>
                                <td className="py-3 px-6 font-medium text-gray-900">{product.name}</td>
                                <td className="py-3 px-6">{product.price}</td>
                                <td className="py-3 px-1 text-center">
                                    <Link to={'/edit/'+product.id} className="font-medium bg-blue-400 hover:bg-blue-500 px-3 py-1 text-white mr-1 rounded-lg">Edit</Link>
                                    <button onClick={(productId)=> deleteProduct(product.id)} className="font-medium bg-red-400 hover:bg-red-500 px-3 py-1 text-white mr-1 rounded-lg">Delete</button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            <div className="w-full mt-5">
            <Link to="/" className="m-5">Back</Link>
            <Link to="/userlist">user</Link>
            <Link to="/addusers" className="max-w-md border border-slate-300 bg-slate-500 rounded-lg p-2 mx-8 mt-4 hover:bg-slate-200">add users</Link></div>
            </div>
        </div>
    )
}

export default ProductList