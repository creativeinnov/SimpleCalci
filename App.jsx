import { useState } from 'react'

function App() {
  const [var1, setVar1] = useState(0)
  const [var2, setVar2] = useState(0)
  const [result, setResult] = useState(0)
  
  const handleChange1 = (event) => {
    setVar1(Number(event.target.value))
  }

  const handleChange2 = (event) => {
    setVar2(Number(event.target.value))
  }
  
  const addition = () => {
    setResult(var1 + var2)
  }

  const subtraction = () => {
    setResult(var1 - var2)
  }

  return(
    <>
      <h1>Simple Calculator</h1>
      <input
        onChange={handleChange1}
        value={var1}
        placeholder='Enter number 1'
        type="number"
      />
      <input 
        onChange={handleChange2}
        value={var2}
        placeholder='Enter number 2'
        type="number"
      />
      <div>
        <button onClick={addition}>Add</button>
        <button onClick={subtraction}>Subtract</button>
      </div>
      <h2>Result: {result}</h2>
    </>
  )
}

export default App;