import React from 'react'
import "./defectEntryPopup.css"
import Keyboard from '../keyboard/Keyboard'
import { useState } from 'react';

function DefectEntryPopup({ onClose }) {
    const [inputValues, setInputValues] = useState({
        hataSorumlusu: "",
        hataSinifi: "",
        exitDepartment: "",
        aciklama: "",
        islem: "",
        altSorumlu: "",
        rdd: "",
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

    const handlePopupClose = () => {
        onClose();
    };
    return (
        <div className='defect-entry-popup-grid'>
            <div className='defect-entry-popup-container'>
                <div className='row top-bar'>
                    <div className='terminal-name'>CVWQS</div>
                    <div className='common-defect'>SIK GELEN HATA</div>
                </div>
                <div className='row'>
                    <div className='form-container'>
                        <div className='form-row'>
                            <label>Hata Sorumlusu</label>
                            <input
                                type='text'
                                placeholder='hata sorumlusu'
                                value={inputValues.sicilNo}
                                onFocus={() => handleInputFocused("hataSorumlusu")}
                            />
                        </div>
                        <div className='form-row'>
                            <label>Hata Sınıfı</label>
                            <input
                                type='text'
                                placeholder='hata sınıfı'
                                value={inputValues.hataSinifi}
                                onFocus={() => handleInputFocused("hataSinifi")}
                            />
                        </div>
                        <div className='form-row'>
                            <label>Exit Department</label>
                            <input
                                type='text'
                                placeholder='exit department'
                                value={inputValues.exitDepartment}
                                onFocus={() => handleInputFocused("exitDepartment")}
                            />
                        </div>
                        <div className='form-row'>
                            <label>Açıklama</label>
                            <input
                                type='text'
                                placeholder='açıklama'
                                value={inputValues.aciklama}
                                onFocus={() => handleInputFocused("aciklama")}
                            />
                        </div>
                        <div className='form-row'>
                            <label>Yapılan İşlem</label>
                            <input
                                type='text'
                                placeholder='yapılan işlem'
                                value={inputValues.islem}
                                onFocus={() => handleInputFocused("islem")}
                            />
                        </div>
                        <div className='form-row'>
                            <label>Alt Sorumlu</label>
                            <input
                                type='text'
                                placeholder='alt sorumlu'
                                value={inputValues.altSorumlu}
                                onFocus={() => handleInputFocused("altSorumlu")}
                            />
                        </div>
                        <div className='form-row'>
                            <label>RDD</label>
                            <input
                                type='text'
                                placeholder='rdd'
                                value={inputValues.rdd}
                                onFocus={() => handleInputFocused("rdd")}
                            />
                        </div>
                        <div className='form-row button-grid'>
                            <button className='save'>KAYDET</button>
                            <button className='cancel' onClick={handlePopupClose}>İPTAL</button>
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

export default DefectEntryPopup
