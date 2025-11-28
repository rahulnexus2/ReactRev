import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeContext from './Context'
import Home from './Home'

function App() {
  const [color, setColor] = useState("white")
  const [Theme,setTheme]=useState("light");
  


  return (
    <>
    <div style={{background:color}}>
    <ThemeContext.Provider value={{Theme,setTheme,color,setColor}}>
      <Home/>
    </ThemeContext.Provider>
    </div>
  
      
    </>
  )
}

export default App
