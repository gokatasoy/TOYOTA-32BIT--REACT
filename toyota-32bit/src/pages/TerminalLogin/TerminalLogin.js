import React from 'react'
import "./terminalLogin.css"

function TerminalLogin() {
    return (
        <div className='login-page-grid'>
            <div className='login-page-container'>
                <div className='terminal-name'>
                    <h1>Terminal Name</h1>
                </div>
                <div className='form-container'>
                    <div className='section'>
                        <label>Terminal Listesi:</label>
                        <select>
                            <option>option1</option>
                            <option>option2</option>
                            <option>option3</option>
                        </select>
                    </div>
                    <div className='section'>
                        <label>Sicil No:</label>
                        <input type="text" placeholder='sicil no' />
                    </div>
                    <div className='section'>
                        <label>Şifre:</label>
                        <input type="password" placeholder='şifre' />
                    </div>
                    <div className='section'>
                        <label>Montaj No:</label>
                        <input type="text" placeholder='montaj no' />
                    </div>
                </div>             
            </div>
        </div>
    )
}

export default TerminalLogin
