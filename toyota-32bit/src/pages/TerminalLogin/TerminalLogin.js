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
    const [inputValue, setInputValue] = useState("");

    const handleKeyPressed = (key) => {
        if (key === 'delete') {
            setInputValue((prevValue) => prevValue.slice(0, -1));
        } else {
            setInputValue((prevValue) => prevValue + key);
        }
    };

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
        navigate("/defect-page")
    };

    const handleCloseClick = () => {
        navigate("/");
    };

    return (
        <div className='login-page-grid'>
            <div className='login-page-container'>
                <div className='row top-bar'>
                    <div className='terminal-name'>Terminal Name</div>
                </div>
                <div className='row'>
                    <div className='form-container'>
                        <div className='form-row terminal-list'>
                            <label>Terminal Listesi:</label>
                            <select className='select-terminal-list'>
                                {veri.map(({ termName }) => (
                                    <option key={veri.termId}>{termName}</option>))}
                            </select>
                        </div>
                        <div className='form-row'>
                            <label>Sicil No:</label>
                            <input type="text" placeholder='sicil no' value={inputValue} />
                        </div>
                        <div className='form-row'>
                            <label>Şifre:</label>
                            <input type="password" placeholder='şifre' />
                        </div>
                        <div className='form-row'>
                            <label>Montaj No:</label>
                            <input type="text" placeholder='montaj no' />
                        </div>
                        <div className='form-row-date-shift'>
                            <DateShift />
                        </div>

                        <div className='form-row button-grid'>
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
                </div>
                <div className='keyboard-component-grid'>
                    <Keyboard onKeyPressed={handleKeyPressed} />
                </div>
            </div>
        </div>
    )
}

export default TerminalLogin
