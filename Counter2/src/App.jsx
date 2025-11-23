import { useState ,useEffect, use} from 'react'
import reactLogo from './assets/react.svg'


function App() {
  const [count, setCount] = useState(0)
  const [intervalId,setintervalID]=useState(null);  
  const [isRunning,setisRunning]=useState(false);
  
  
  useEffect(()=>{
    if(isRunning){
      const id=setInterval(()=>{
          setCount(prev=>prev+1);
      },1000)

      setintervalID(id);
    }

    return ()=>clearInterval(intervalId);


    
  },[isRunning]);

  const Begin =() => setisRunning(true);

  function Stop(){
    clearInterval(intervalId);
    setisRunning(false);
    setintervalID(null);
  }

  function Reset(){
     setisRunning(false);
    setintervalID(null);
    setCount(0);
    clearInterval(intervalId);

  }


  return (
  <>
  <div>
  <h1>{count}</h1> 
  <button onClick={Begin}>start</button>
  <button onClick={Stop}>stop</button>
  <button onClick={Reset}>reset</button>
  </div>
   </>
  )
    
}

export default App
