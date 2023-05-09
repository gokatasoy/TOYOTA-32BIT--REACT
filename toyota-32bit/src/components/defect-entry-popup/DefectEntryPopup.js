import React from 'react'
import "./defectEntryPopup.css"
import Keyboard from '../keyboard/Keyboard'
import { useState } from 'react';

function DefectEntryPopup({ onClose }) {
    const [inputValue, setInputValue] = useState("");

    const handleKeyPressed = (key) => {
        setInputValue(inputValue + key);
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
                            <input type='text' />
                        </div>
                        <div className='form-row'>
                            <label>Hata Sınıfı</label>
                            <input type='text' value={inputValue} />
                        </div>
                        <div className='form-row'>
                            <label>Exit Department</label>
                            <input type='text' />
                        </div>
                        <div className='form-row'>
                            <label>Açıklama</label>
                            <input type='text' />
                        </div>
                        <div className='form-row'>
                            <label>Yapılan İşlem</label>
                            <input type='text' />
                        </div>
                        <div className='form-row'>
                            <label>Alt Sorumlu</label>
                            <input type='text' />
                        </div>
                        <div className='form-row'>
                            <label>RDD</label>
                            <input type='text' />
                        </div>
                        <div className='form-row button-grid'>
                            <button className='save'>KAYDET</button>
                            <button className='cancel' onClick={handlePopupClose}>İPTAL</button>
                        </div>
                    </div>
                </div>
                <div className='keyboard-component-grid'>
                    <Keyboard onKeyPressed={handleKeyPressed}/>
                </div>
            </div>
        </div>
    )
}

export default DefectEntryPopup
