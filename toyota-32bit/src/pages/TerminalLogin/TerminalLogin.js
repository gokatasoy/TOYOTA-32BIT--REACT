import React from 'react'
import "./terminalLogin.css"
import DateShift from "../../components/date-shift/DateShift"
import Button from "../../components/button/Button"
import Keyboard from "../../components/keyboard/Keyboard"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

function TerminalLogin() {
    const [veri, setVeri] = useState([])
    
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("./first-login.json")
            .then(res => setVeri(res.data))
            .catch(error => {
            console.log(error);
            setVeri("An error occurred while fetching data");
            });
        }, []);

    // LOGIN & CLOSE BUTTONS
    const handleLoginClick = () => {
        navigate("/errorPage")
    };
    
    const handleCloseClick = () => {
        navigate("/");
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
                                {veri.map(({termName}) => (
                                <option key={veri.termId}>{termName}</option>))}
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
