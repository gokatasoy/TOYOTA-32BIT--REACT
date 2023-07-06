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
        <div className='bottom-grid'>
            <div className='montaj-body'>
                <div className='bottom-grid-section'>
                    <label>{t("common.Assembly No")}:</label>
                    <input className='bottom-grid-input'/>
                    <span className='search-button'>{t("button.Search")}</span>
                    <FontAwesomeIcon className='updown-button' icon={faChevronUp} />
                </div>
                <div className='bottom-grid-section'>
                    <label>{t("common.Body No")}:</label>
                    <input className='bottom-grid-input'/>
                    <span className='search-button'>{t("button.Search")}</span>
                    <FontAwesomeIcon className='updown-button' icon={faChevronDown} />
                </div>
            </div>
            <div className='button-container'>
                <div className='bottom-grid-button'>{t("button.Vehicle List")}</div>
                <div className='bottom-grid-button'>{t("button.Defect List")}</div>
                <div className='bottom-grid-button'>{t("button.Multiple Defect")}</div>
                <div className='bottom-grid-button'>{t("button.Defect List")}</div>
                <div className='bottom-grid-button'>{t("button.Defect Copy")}</div>
                <div className='bottom-grid-button' onClick={handleCloseClick}>{t("button.Logout")}</div>
            </div>
        </div>
    )
}

export default BottomGrid
