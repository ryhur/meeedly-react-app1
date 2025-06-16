import { useState } from 'react'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="page">
        <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
          <button onClick={() => setCount(count - 1)}>−</button>
          <button>Count: {count}</button>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
    </>
  )
}

export default Home