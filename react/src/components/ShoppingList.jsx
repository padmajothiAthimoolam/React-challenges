import React, { useState } from 'react'

const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const [name, setName]  = useState("");
    const [quantity, setQuantity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || ! quantity) return;

        const newItem = {
            name,
            quantity: parseInt(quantity),
        };

        setItems([...items, newItem]);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
            Name of the product:
            <input type="text" name= "name" value={name} placeholder='Name' onChange={(e)=> setName(e.target.value)}/>
        </label>
        <label>
            Quantity:
            <input type="number" name= "quantity" value={quantity} placeholder='Quantity' onChange={(e) => setQuantity(e.target.value)}/>
        </label>
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((item, index) => (
            <li key={index}>{item.name} - Quantity {item.quantity}</li>
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
