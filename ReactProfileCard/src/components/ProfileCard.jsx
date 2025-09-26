import React from 'react'

export const ProfileCard = ({ children, name, about }) => {
  return (
    <div className='flex justify-center '>
    <div className="flex flex-col items-center justify-center  bg-white shadow-md rounded-2xl w-64 p-6 m-6 hover:shadow-lg transition">
      
      
      <div className="flex items-center justify-center h-24 w-24 rounded-full bg-gray-200 overflow-hidden">
        {children}
      </div>

   
      <div className="text-center mt-4">
        <h5 className="text-lg font-semibold text-gray-800">{name}</h5>
        <h6 className="text-sm text-gray-500">{about}</h6>
      </div>
    </div>
    </div>
  )
}
