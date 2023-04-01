import React from 'react'
import "./terminalLogin.css"
import DateShift from "../../components/date-shift/DateShift"
import Button from "../../components/button/Button"
import Keyboard from "../../components/keyboard/Keyboard"

function TerminalLogin() {
    // LOGIN & CLOSE BUTTONS
    const handleLoginClick = () => {
        alert('Giriş yaptınız');
    };
    
    const handleCloseClick = () => {
        alert('Çkış yaptınız.');
    };

    return (
        <div className='login-page-grid'>
            <div className='login-page-container'>
                <div className='terminal-name'>
                    <h1>Terminal Name</h1>
                </div>
                <div className='form-container'>
                    <div className='section'>
                        <label>Terminal Listesi:</label>
                        <select className='select-terminal-list'>
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
                    <div className='section section-date-shift'>
                        <DateShift/>
                    </div>

                    <div className='section section-buttons'>
                        <Button
                        className="giris"
                        onClick={handleLoginClick}
                        text={"Giriş Yap"}
                        />
                        <Button
                        className="kapat"
                        onClick={handleCloseClick}
                        text={"Kapat"}
                        />
                    </div>
                </div>
                <div className='container-keyboard'>
                    <Keyboard/>
                </div>
            </div>
        </div>
    )
}

export default TerminalLogin
