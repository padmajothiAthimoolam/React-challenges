import React from 'react'
import { FaCartArrowDown } from "react-icons/fa6";
const ProductsList = () => {
    const products = [
        { id: 1, name:"Phone", price: "$699"},
        { id: 2, name:"laptop", price: "$1699"},
        { id: 3, name:"headphone", price: "$69"}
    ]   
  return (
    <div>
        <FaCartArrowDown />
      {products.map(({id, name, price})=>(
        <ul key={id}>
            <li>{id}</li>
            <li>{name}</li>
            <li>{price}</li>
        </ul>
      ))}
    </div>
  )
}

export default ProductsList
