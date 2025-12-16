import React, { useState } from 'react'
import UseEffectWithProps from './UseEffectWithProps'

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>This is App.jsx file</h2>
       <UseEffectWithProps data={count} />
       <button onClick={() => setCount(count + 1)}>Counter</button>
    </div>
  )
}

export default App
