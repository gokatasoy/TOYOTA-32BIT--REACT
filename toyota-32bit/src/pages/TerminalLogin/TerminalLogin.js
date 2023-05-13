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
    const [inputValues, setInputValues] = useState({
        sicilNo: "",
        password: "",
        montajNo: ""
    });
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [focusedInput, setFocusedInput] = useState("");

    // KEYBOARD FUNCTION
    const handleKeyPressed = (key) => {
        if (isInputFocused && focusedInput !== "") {
            if (key === 'delete') {
                setInputValues(prevValues => ({
                    ...prevValues,
                    [focusedInput]: prevValues[focusedInput].slice(0, -1)
                }));
            } else {
                setInputValues(prevValues => ({
                    ...prevValues,
                    [focusedInput]: prevValues[focusedInput] + key
                }));
            }
        }
    };

    const handleInputFocused = (inputName) => {
        setIsInputFocused(true);
        setFocusedInput(inputName);
    };

    let navigate = useNavigate();

    // FETCHING DATA
    useEffect(() => {
        axios.get("./first-login.json")
            .then(res => setVeri(res.data))
            .catch(error => {
                console.log(error);
                setVeri("An error occurred while fetching data");
            });
    }, []);

    // LOGIN & CLOSE BUTTONS'S NAVIGATION
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
                            <input
                                type="text"
                                placeholder='sicil no'
                                value={inputValues.sicilNo}
                                onFocus={() => handleInputFocused("sicilNo")}
                            />
                        </div>
                        <div className='form-row'>
                            <label>Şifre:</label>
                            <input
                                type="password"
                                placeholder='şifre'
                                value={inputValues.password}
                                onFocus={() => handleInputFocused("password")}
                            />
                        </div>
                        <div className='form-row'>
                            <label>Montaj No:</label>
                            <input
                                type="text"
                                placeholder='montaj no'
                                value={inputValues.montajNo}
                                onFocus={() => handleInputFocused("montajNo")}
                            />
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
