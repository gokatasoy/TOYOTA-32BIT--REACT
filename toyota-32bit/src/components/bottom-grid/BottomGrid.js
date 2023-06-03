import React from 'react'
import "./bottomGrid.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

function BottomGrid() {
    const { t } = useTranslation();

    let navigate = useNavigate();

    const handleCloseClick = () => {
    navigate("/")
    }

    return (
        <div className='BottomGrid'>
            <div className='montaj-body'>
                <div className='bottomGridSection'>
                    <label>{t("common.Assembly No")}:</label>
                    <input className='bottomGridInput'/>
                    <span className='search-button'>{t("button.Search")}</span>
                    <FontAwesomeIcon className='updown-button' icon={faChevronUp} />
                </div>
                <div className='bottomGridSection'>
                    <label>{t("common.Body No")}:</label>
                    <input className='bottomGridInput'/>
                    <span className='search-button'>{t("button.Search")}</span>
                    <FontAwesomeIcon className='updown-button' icon={faChevronDown} />
                </div>
            </div>
            <div className='car-list'>{t("button.Vehicle List")}</div>
            <div className='manuel-error'>{t("button.Vehicle List")}</div>
            <div className='multiple-error'>{t("button.Multiple Defect")}</div>
            <div className='error-list'>{t("button.Defect List")}</div>
            <div className='error-copy'>{t("button.Defect Copy")}</div>
            <div className='exit' onClick={handleCloseClick}>{t("button.Logout")}</div>
        </div>
    )
}

export default BottomGrid
