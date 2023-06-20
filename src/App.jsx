import React, { useState } from 'react'
import './App.css'
import ToDo from './components/ToDo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <ToDo/>
      </div>
    </>
  )
}

export default App
