import React from 'react'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
const PopularProducts = () => {
    const[products, setProducts]=useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products?limit=4")
            .then((res)=> res.json())
            .then((data)=> setProducts(data))
    },[])
  return (
    <div>
        <section className='bg-white px-6 md:px-6 lg:px-24 py-12'>
            <h2 className='text-3xl font-bold mb-6 text-blue-900'>
                Popular Products
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                {products.map((product)=>(
                    <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-md transition duration-300">
                        <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-4" />
                        <h3 className="text-md font-semibold mb-2 line-clamp-2">{product.title}</h3>
                        <p className='text-blue-700 font-bold mb-2'>${product.price}</p>
                        <Link to={`/products/${product.id}`}>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
                                 View Details
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default PopularProducts