import React from 'react'

const TodoInput =()=>{
  function addTodo(){
    

  }
  return (
    <div className='flex justify-center items-center w-full h-max'>
      <input className='border-4 m-2' type="text"/>
      <button onClick={addTodo} className='border-4 bg-gray'>Add</button>
    </div>
  )
}

export default TodoInput
