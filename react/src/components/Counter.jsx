import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

  return (
    <div>
        <p>Counter: {counter}</p>
      <button onClick={()=> setCounter(counter +1 )}>Increment</button>
    </div>
  )
}

export default Counter
