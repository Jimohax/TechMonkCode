import React, { useState } from 'react'

const Users = ({getColor}) => {
  const [activeColor, setActiveColor] = useState("");
   const handleChange =(e) =>{
    const { value } = e.target;
    setActiveColor(value);
    getColor(value);
   }

  return (
    <div>
      <h1>test</h1>
      <input type="text" 
      id='input'
      aria-label='input'
      onChange={handleChange}
      value={activeColor}
      
      />
    </div>
  )
}

export default Users