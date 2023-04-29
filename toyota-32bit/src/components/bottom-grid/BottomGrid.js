import React from 'react'
import "./bottomGrid.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function BottomGrid() {
    return (
        <div className='BottomGrid'>
            <div className='montaj-body'>
                <div className='bottomGridSection'>
                    <label>MONTAJ NO:</label>
                    <input/>
                    <span className='search-button'>ARA</span>
                    <FontAwesomeIcon className='updown-button' icon={faChevronUp} />
                </div>
                <div className='bottomGridSection'>
                    <label>BODY NO:</label>
                    <input className='bottomGridInput'/>
                    <span className='search-button'>ARA</span>
                    <FontAwesomeIcon className='updown-button' icon={faChevronDown} />
                </div>
            </div>
            <div className='car-list'>ARAÇ LİSTESİ</div>
            <div className='manuel-error'>MANUEL HATA</div>
            <div className='multiple-error'>ÇOKLU HATA</div>
            <div className='error-list'>HATA LİSTESİ</div>
            <div className='error-copy'>HATA KOPYA</div>
            <div className='exit'>ÇIKIŞ YAP</div>
        </div>
    )
}

export default BottomGrid
