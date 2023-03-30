import React from 'react'
import {useState } from 'react';
import "./keyboard.css"

function Keyboard() {
    const [text, setText] = useState("");

    const addToText = (val)=>{
        setText((text) => [...text, val + ""])
    }
    
    const toSpace = () => {
        setText((text) => [...text, " "])
    }
    
    const toDelete = (val) => {
        setText(text.slice(0, -1))
    }
    
    return (
        <div className='keyboard-container'>
            <div className='keyboard-grid'>
                <div className='row'>
                    <button className="keys" onClick={addToText} >_</button> 
                    <button className="keys" onClick={addToText} >1</button> 
                    <button className="keys" onClick={addToText} >2</button>
                    <button className="keys" onClick={addToText} >3</button>
                    <button className="keys" onClick={addToText} >4</button>
                    <button className="keys" onClick={addToText} >5</button>
                    <button className="keys" onClick={addToText} >6</button>
                    <button className="keys" onClick={addToText} >7</button>
                    <button className="keys" onClick={addToText} >8</button>
                    <button className="keys" onClick={addToText} >9</button>
                    <button className="keys" onClick={addToText} >0</button>               
                    <button className="keys delete" onClick={toDelete}>Delete</button>
                </div>
                <div className='row'>
                    <button className="keys tab" onClick={addToText}>Tab</button>
                    <button className="keys" onClick={addToText}>Q</button>
                    <button className="keys" onClick={addToText}>W</button>
                    <button className="keys" onClick={addToText}>E</button>
                    <button className="keys" onClick={addToText}>R</button>
                    <button className="keys" onClick={addToText}>T</button>
                    <button className="keys" onClick={addToText}>Y</button>
                    <button className="keys" onClick={addToText}>U</button>
                    <button className="keys" onClick={addToText}>I</button>
                    <button className="keys" onClick={addToText}>O</button>
                    <button className="keys" onClick={addToText}>P</button>
                    <button className="keys" onClick={addToText}>Ğ</button>
                    <button className="keys" onClick={addToText}>Ü</button>
                </div>
                <div className='row'>
                    <button className="keys capslock">CapsLock</button>
                    <button className="keys" onClick={addToText}>A</button>
                    <button className="keys" onClick={addToText}>S</button>
                    <button className="keys" onClick={addToText}>D</button>
                    <button className="keys" onClick={addToText}>F</button>
                    <button className="keys" onClick={addToText}>G</button>
                    <button className="keys" onClick={addToText}>H</button>
                    <button className="keys" onClick={addToText}>J</button>
                    <button className="keys" onClick={addToText}>K</button>
                    <button className="keys" onClick={addToText}>L</button>
                    <button className="keys" onClick={addToText}>Ş</button>
                    <button className="keys" onClick={addToText}>İ</button>
                </div>
                <div className='row'>
                    <button className="keys smaller" onClick={addToText}>&lt;</button>
                    <button className="keys bigger" onClick={addToText}>&gt;</button>
                    <button className="keys" onClick={addToText}>Z</button>
                    <button className="keys" onClick={addToText}>X</button>
                    <button className="keys" onClick={addToText}>C</button>
                    <button className="keys" onClick={addToText}>V</button>
                    <button className="keys" onClick={addToText}>B</button>
                    <button className="keys" onClick={addToText}>N</button>
                    <button className="keys" onClick={addToText}>M</button>
                    <button className="keys" onClick={addToText}>Ö</button>
                    <button className="keys" onClick={addToText}>Ç</button>
                    <button className="keys" onClick={addToText}>.</button>
                    <button className="keys" onClick={addToText}>,</button>
                </div>
                <div className='row'>
                    <button className="keys space" onClick={toSpace}>Space</button>
                </div>
            </div>
        </div>
    )
}

export default Keyboard
