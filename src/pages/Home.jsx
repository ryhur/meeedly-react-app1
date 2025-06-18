import { useState } from 'react'
import './Home.css'

function Home() {
  const [count, setCount] = useState(0)

  if (count < 0) {
    setCount(0)
  }

  return (
    <>
      <h1>
        COUNT: <span className="count-number">{count}</span>
      </h1>
      <div className="count">
        
      </div>
      <div className="counter">
        <button onClick={() => setCount(count - 1)}>−</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </>
  )
}

export default Home