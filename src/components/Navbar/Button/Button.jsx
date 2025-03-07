import React, { useEffect } from 'react'

const Button = ({children, type, onClick}) => {


    const initButton = (type) => {
        switch(type){
            case "primary":
                return (
                    <button className='btn btn-primary' onClick={onClick}>{children}</button>
                )
            
            case "secondary":
                return (
                    <button className='btn btn-secondary' onClick={onClick}>{children}</button>
                )

            case "added":
                return (
                    <button className='btn btn-added'>Added</button>
                )

            case "submitted":
                return (
                    <button className='btn btn-submitted'>Request Submitted</button>
                )

            default: return (
                <button className='main'>{children}</button>
            )
        }
    }
// useEffect(() => {
//     initButton(type)
// })

  return (
    initButton(type)
  )
}

export default Button