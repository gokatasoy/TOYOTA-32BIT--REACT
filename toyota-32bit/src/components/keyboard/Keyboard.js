import React from 'react'
import {useState } from 'react';
import "./keyboard.css"

function Keyboard() {
    const [text, setText] = useState("");

    function TextArea({text}) {
        return (
        <div className='text-wrapper'>
            <div className='text'>
                <h3>{text}</h3>
            </div>
        </div>
        )
}

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
            <TextArea text={text}/>
            <div className='keyboard-grid'>
                <div className='row'>
                    <button className="keys" key="_" onClick={addToText} >_</button> 
                    <button className="keys" key="1" onClick={addToText} >1</button> 
                    <button className="keys" key="2" onClick={addToText} >2</button>
                    <button className="keys" key="3" onClick={addToText} >3</button>
                    <button className="keys" key="4" onClick={addToText} >4</button>
                    <button className="keys" key="5" onClick={addToText} >5</button>
                    <button className="keys" key="6" onClick={addToText} >6</button>
                    <button className="keys" key="7" onClick={addToText} >7</button>
                    <button className="keys" key="8" onClick={addToText} >8</button>
                    <button className="keys" key="9" onClick={addToText} >9</button>
                    <button className="keys" key="0" onClick={addToText} >0</button>               
                    <button className="keys delete" onClick={toDelete}>Delete</button>
                </div>
                <div className='row'>
                    <button className="keys tab" onClick={addToText}>Tab</button>
                    <button className="keys" key="Q" onClick={addToText}>Q</button>
                    <button className="keys" key="W" onClick={addToText}>W</button>
                    <button className="keys" key="E" onClick={addToText}>E</button>
                    <button className="keys" key="R" onClick={addToText}>R</button>
                    <button className="keys" key="T" onClick={addToText}>T</button>
                    <button className="keys" key="Y" onClick={addToText}>Y</button>
                    <button className="keys" key="U" onClick={addToText}>U</button>
                    <button className="keys" key="I" onClick={addToText}>I</button>
                    <button className="keys" key="O" onClick={addToText}>O</button>
                    <button className="keys" key="P" onClick={addToText}>P</button>
                    <button className="keys" key="Ğ" onClick={addToText}>Ğ</button>
                    <button className="keys" key="Ü" onClick={addToText}>Ü</button>
                </div>
                <div className='row'>
                    <button className="keys capslock">CapsLock</button>
                    <button className="keys" key="A" onClick={addToText}>A</button>
                    <button className="keys" key="S" onClick={addToText}>S</button>
                    <button className="keys" key="D" onClick={addToText}>D</button>
                    <button className="keys" key="F" onClick={addToText}>F</button>
                    <button className="keys" key="G" onClick={addToText}>G</button>
                    <button className="keys" key="H" onClick={addToText}>H</button>
                    <button className="keys" key="J" onClick={addToText}>J</button>
                    <button className="keys" key="K" onClick={addToText}>K</button>
                    <button className="keys" key="L" onClick={addToText}>L</button>
                    <button className="keys" key="Ş" onClick={addToText}>Ş</button>
                    <button className="keys" key="İ" onClick={addToText}>İ</button>
                </div>
                <div className='row'>
                    <button className="keys smaller" key="&lt;" onClick={addToText}>&lt;</button>
                    <button className="keys bigger" key="&gt;" onClick={addToText}>&gt;</button>
                    <button className="keys" key="Z" onClick={addToText}>Z</button>
                    <button className="keys" key="X" onClick={addToText}>X</button>
                    <button className="keys" key="C" onClick={addToText}>C</button>
                    <button className="keys" key="V" onClick={addToText}>V</button>
                    <button className="keys" key="B" onClick={addToText}>B</button>
                    <button className="keys" key="N" onClick={addToText}>N</button>
                    <button className="keys" key="M" onClick={addToText}>M</button>
                    <button className="keys" key="Ö" onClick={addToText}>Ö</button>
                    <button className="keys" key="Ç" onClick={addToText}>Ç</button>
                    <button className="keys" key="." onClick={addToText}>.</button>
                    <button className="keys" key="," onClick={addToText}>,</button>
                </div>
                <div className='row'>
                    <button className="keys space" onClick={toSpace}>Space</button>
                </div>
            </div>
        </div>
    )
}

export default Keyboard
