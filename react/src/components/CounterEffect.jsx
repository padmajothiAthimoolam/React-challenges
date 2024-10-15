import React, { useEffect, useState } from 'react'

const CounterEffect = () => {
    const [ count, setCount] = useState(0);

    useEffect(()=>{
        console.log(`Counter value is${count}`)
    }, [count])

  return (
    <div>
        {count}
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}

export default CounterEffect
