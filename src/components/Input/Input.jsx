import React from 'react'
import "./Input.scss";

const Input = ({placeholder, register, name, rules}) => {
  return (
    <input type='text' placeholder={placeholder} {...register(`${name}`, {...rules})} className='input' />
  )
}

export default Input