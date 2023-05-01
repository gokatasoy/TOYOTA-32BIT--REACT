import React from 'react'
import "./defectEntry.css"
import AssyNo from '../assy-no/AssyNo'
import { useNavigate } from 'react-router-dom'

function DefectEntry() {
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

export default DefectEntry
