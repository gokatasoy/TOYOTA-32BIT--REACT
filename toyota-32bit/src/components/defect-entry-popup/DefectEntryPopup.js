import React from 'react'
import "./defectEntryPopup.css"
import Keyboard from '../keyboard/Keyboard'

function DefectEntryPopup() {
    return (
        <div className='defect-entry-popup-grid'>
            <div className='defect-entry-popup-container'>
                <div className='row'>
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
                            <input type='text' />
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
                            <button className='close'>İPTAL</button>
                        </div>
                    </div>
                </div>
                <div className='keyboard-grid'>
                    <Keyboard />
                </div>
            </div>
        </div>
    )
}

export default DefectEntryPopup
