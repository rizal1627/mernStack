import React, {useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom'



const EditPorduct = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        const getProductByID = async () => {
            const response = await axios.get(`http://localhost:3001/products/${id}`)
            setName(response.data.name)
            setPrice(response.data.price)
        }
        getProductByID()
    }, [id])

    const updateProduct = async (e) => {
        e.preventDefault()
        await axios.patch('http://localhost:3001/products/'+id, {
            name: name,
            price: parseInt(price)
        })
        navigate("/")
    }

  return (
    <div className='max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300'>
        <form onSubmit={updateProduct} className='my-10'>
            <div className="flex flex-col">
                <div className="mb-5">
                    <label htmlFor="" className='font-bold text-slate-700'>Product Name</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-300 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder='Product Name ...' 
                    value={name}
                    onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label htmlFor="" className='font-bold text-slate-700'>Price</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-300 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder='Price ...'
                    value={price}
                    onChange={(e)=> setPrice(e.target.value)} />
                </div>
                <button type='submit' className='w-full py-3 font-bold text-white bg-indigo-700 hover:bg-indigo-500 rounded-lg border-indiog-600 hover:shadow'>Update</button>
            </div>
        </form>
        <button className='w-20 py-3 bg-indigo-200 rounded-sm'> Back</button>
    </div>
  )
}

export default EditPorduct