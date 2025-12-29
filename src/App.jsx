import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FrontendLearningHub from './frontendlearningComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FrontendLearningHub />
    </>
  )
}

export default App
