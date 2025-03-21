import React from 'react'

const name:string = "victor";
const age:number = 23;
const isActive:boolean = false;
  
export const BasicTypes = () => {
  
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{isActive ? 'Activo' : 'No Activo'}</p>

    </div>
  )
}
