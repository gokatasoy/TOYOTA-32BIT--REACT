import React from 'react'
import "./textarea.css"

function TextArea({text}) {
  return (
    <div className='text-wrapper'>
        <div className='text'>
            <h3>{text}</h3>
        </div>
    </div>
  )
}

export default TextArea 
