import { useState,useEffect } from 'react'
import { Fruits } from './Fruits';


import React from 'react'

const App = () => {

  const[input,Setinput]=useState("");

  const HandleOnChange=(e)=>{
    Setinput(e.target.value);
  }

  const matchItems=
  input.length>0?
  Fruits.filter(item=>
    item.name.toLowerCase().includes(input.toLowerCase())
  ):[];

  return (
    <div>
      <input type="text" onChange={HandleOnChange} />
      {matchItems.map(item=>
        <p key={item.id}>{item.name}</p>
      )}
    </div>
  )
}

export default App

