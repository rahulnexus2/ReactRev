
  import React, {useState}from 'react';

  const CounterApp = () => {
    const[count,setcount]=useState(0);
    return (
      <div className='flex  items-center justify-center h-screen w-full bg-gray-100'>

        <div className='flex flex-col items-center justify-center bg-white p-10 rounded shadow-md'>
          <p className="text-4xl font-bold mb-6">{count}</p>
        <div className='flex gap-4'>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={Incrementhandler}>increment</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={Decrementhandler}>decrement</button>
        <button  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" onClick={ResetHandler}>Reset</button>
        </div>
        </div>

      </div>   
      
    ) 



    function Incrementhandler(){
        setcount(count+1);

      }

    function Decrementhandler(){
        setcount(count-1);

      }

    function ResetHandler(){
      setcount(0);
    }



{/* 
  setcount(prev=>prev+1) //it update previous value as it get previous val
  setCount(prev => prev + 1);// this will increment twice correctly 

  setcount(count+1)// it updates current value
  setCount(count + 1);//You might expect the count to increase by 2, but it only increases by 1 — because both calls use the same stale value of count.;

*/}

  }

  export default CounterApp
