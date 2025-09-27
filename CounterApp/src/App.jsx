import { useState } from 'react'
import CounterApp from './CounterApp'
import ToggleButton from './ToggleButton'
import ShowHide from './ShowHide'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*<CounterApp></CounterApp>*/}
      {/*<ToggleButton></ToggleButton>*/}
      <ShowHide></ShowHide>
     </>
       
  )
}
export default App
