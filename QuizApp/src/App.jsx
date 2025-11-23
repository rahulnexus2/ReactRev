import { useState } from 'react'

import QuizApp from './QuizApp'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <QuizApp></QuizApp>
    </>
  )
}

export default App
