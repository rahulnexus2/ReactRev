import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  async function BtnHandler()
  {

    setCount(count=>count+1)
  }

  useEffect(()=>{
    console.log("running");


    return ()=>{
      if(count==5)
        setCount(count=>count-5)
    }

  },[count])


  return (
    <>
    <div>
      <h1>
        {count}
      </h1>

      <button onClick={BtnHandler}>Generate</button>
      </div>
    </>
  )
}

export default App
