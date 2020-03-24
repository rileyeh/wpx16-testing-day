import React, { useState, useEffect } from 'react'
import './App.css'
import toTwoDecimals from './utils/toTwoDecimals'

function App() {
  const [input, setInput] = useState('')
  const [num, setNum] = useState(12.55555)

  useEffect(() => {
    let newNum = toTwoDecimals(num)
    setNum(newNum)
  }, [num])

  return (
    <div className="App">
        <h2>type in your favorite color</h2>
        <input type='text' placeholder='color' onChange={e => setInput(e.target.value)}/>
        <div style={{
          'height' : 300,
          'width': '100vw',
          'backgroundColor': `${input}`
        }}/>
        <h1>{num}</h1>
        <button>submit</button>
    </div>
  );
}

export default App
