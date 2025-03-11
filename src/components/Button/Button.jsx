import React from 'react'

const Button = ({children, type, onClick, className}) => {


    const initButton = (type) => {
        //renders button according to type prop
        switch(type){
            case "primary":
                return (
                    <button className={`btn btn-primary ${className? className : ""}`} onClick={onClick}>{children}</button>
                )
            
            case "secondary":
                return (
                    <button className={`btn btn-secondary ${className? className : ""}`} onClick={onClick}>{children}</button>
                )

            case "added":
                return (
                    <button className={`btn btn-added ${className? className : ""}`}>Added</button>
                )

            case "submitted":
                return (
                    <button className={`btn btn-submitted ${className? className : ""}`}>Request Submitted</button>
                )

            default: return (
                <button className={`btn btn-primary ${className? className : ""}`}>{children}</button>
            )
        }
    }

  return (
    initButton(type)
  )
}

export default Button