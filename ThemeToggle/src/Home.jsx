import React from 'react'
import { useContext } from 'react'
import ThemeContext from './Context'

const Home = () => {
  const {Theme,setTheme,color,setColor}=useContext(ThemeContext);

  return (
    <div>
      <h1>current Theme</h1>
      <button onClick={()=>{
        setTheme(Theme==="light"?"dark":"light")
        setColor(color==="white"?"black":"white");
        
      }}>Change Theme</button>
      <h1>{Theme}</h1>


  
    </div>
  )
}

export default Home
