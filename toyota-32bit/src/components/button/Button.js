import React from 'react'
import "./button.css"

function Button({onClick, text, className}) {

  return (
    <button className={className} onClick={onClick}>{text}</button>
  )
}

export default Button