import React from 'react'
import "./defectEntryContainer.css"
import AssyNo from '../assy-no/AssyNo'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function DefectEntryContainer() {
    const { t } = useTranslation();

    let navigate = useNavigate();
    const handleDefectPageClick = () => {
        navigate("/defect-page")
    }
    return (
        <div className='defect-entry-grid'>
            <div onClick={handleDefectPageClick} className='defect-entry-button'>{t("button.Defect Entry")}</div>
            <AssyNo/>
        </div>
    )
}

export default DefectEntryContainer
