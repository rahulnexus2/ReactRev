import React from 'react'

export const ProfileCard = ({children,name,about}) => {
  return (
    <div>
      {children}
      <h5>{name}</h5>
      <h6>{about}</h6>
    </div>
  )
}


