import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1)
  }
  const subCount = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>Click the button</h1>
      <h1> {count} </h1>
      <button onClick={addCount}> + </button>
      <button onClick={subCount}> - </button>
    </>
  )
}

export default App
