import { useState } from 'react'
import './App.css'
import Signup from './component/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Signup/>
      </div>
    </>
  )
}

export default App
