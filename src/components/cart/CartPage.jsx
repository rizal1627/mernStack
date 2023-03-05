/* eslint-disable no-template-curly-in-string */
import React from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";

const CartPage = () => {
    const fetcher = async () => {
        const response = await axios.get('http://localhost:3001/products')
        return response.data
    }
    const {data} = useSWR('products', fetcher)
    if(!data) return <h2>Loading ...</h2>
    
    return (
        <div className="#">
            <div className="w-full">
                
                <div className="relative shadow rounded-lg mt-3">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-grey-700 uppercase bg-slate-100">
                            <tr>
                                <th className="py-3 px-1 text-center">No</th>
                                <th className="py-3 px-6">Product Name</th>
                                <th className="py-3 px-6">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((product, index)=>(    
                            <tr className="bg-white border-b" key={product.id}>
                                <td className="py-3 px-1 text-center">{index+1}</td>
                                <td className="py-3 px-6 font-medium text-gray-900">{product.name}</td>
                                <td className="py-3 px-6">{product.price}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CartPage