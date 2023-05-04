import React from 'react'
import "./defectEntryContainer.css"
import AssyNo from '../assy-no/AssyNo'
import { useNavigate } from 'react-router-dom'

function DefectEntryContainer() {
    let navigate = useNavigate();
    const handleDefectPageClick = () => {
        navigate("/defect-page")
    }
    return (
        <div className='defect-entry-grid'>
            <div onClick={handleDefectPageClick} className='defect-entry-button'>HATA GİRİŞİ</div>
            <AssyNo/>
        </div>
    )
}

export default DefectEntryContainer
