import React from 'react'
import { useState } from 'react'

const ToggleButton = () => {
  const [toggle,setToggle]=useState("off")
  function handleToggle(){
    setToggle(prev => (prev === "off" ? "on" : "off"));

  }
  return (
    <div className={`flex justify-center items-center h-screen w-full ${toggle==="on"? "bg-red-300":"bg-amber-500"}`} >
    
      <button  className={`px-6 py-2 rounded border-2 text-white font-semibold ${
          toggle === "on" ? "bg-green-500" : "bg-red-500"
        }`} onClick={handleToggle}>{toggle}</button>
    </div>
      
   
  )
}

export default ToggleButton
