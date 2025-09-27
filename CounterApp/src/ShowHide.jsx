import React, { useState } from 'react'

const ShowHide = () => {
  const [Toggle,setToggle]=useState("hide")
  const [show,setShow]=useState(true)
  function toggleHandler(){
    setToggle(prev=>(prev=== "hide" ?"show" :"hide"))
    setShow(show=>!show)
  }
  return (
    
    <div className='flex justify-center items-center h-screen w-full bg-purple-400 flex-col'>
    <button className={` h-[50px] w-[100px] rounded-lg border-2 ${Toggle=="hide" ?"bg-white":"bg-blue-300"}`} 
    onClick={toggleHandler}>
    {Toggle}</button>
    {show && <p className='bg-white w-[200px] h-[70px] rounded-lg text-center p-3 m-4 '>this is conditionally rendered </p>}
     

    </div>
    
  )
}

export default ShowHide
