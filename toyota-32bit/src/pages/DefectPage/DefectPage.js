import React from 'react'
import "./defectPage.css"
import DefectPageHeader from '../../components/defect-page-header/DefectPageHeader'
import dummyCar from "../../dummy-car.jpeg" 
import { useNavigate } from 'react-router-dom'

function DefectPage() {
    let navigate = useNavigate()

    const handleCloseClick = () => {
        navigate("/")
    }

    const handleBackClick = () => {
        navigate("/terminal-login")
    }

    const handleDefectListClick = () => {
        navigate("/defect-list")
    }

    const handleBigFontClick = () => {
        navigate("/big-font")
    }

    return (
        <div className='defect-page-grid'>
            <div className='defect-page-container'>
                <div className='header-container'>
                    <DefectPageHeader/>
                </div>
                <div className='row'>                  
                    <div className='image-container'>
                        <img src={dummyCar} alt="dummy-car"/>
                        <div className='button-container button-container-bottom'>
                            <div className='button' onClick={handleCloseClick}>ÇIKIŞ</div>
                            <div className='button' onClick={handleBackClick}>GERİ</div>
                            <div className='button'>MODEL İLK RESMİ</div>
                            <div className='button' onClick={handleDefectListClick}>HATA LİSTESİ</div>
                            <div className='button'>TEMİZLE</div>
                            <div className='button' onClick={handleBigFontClick}>BÜYÜK FONT</div>
                        </div>
                    </div>

                    <div className='container'>
                        <div className='checkbox-container'>
                            <div className='checkbox'> 
                                <label>
                                    <input type="checkbox"/>
                                    Harigami
                                </label>
                            </div>
                            <div className='checkbox'> 
                                <label>
                                    <input type="checkbox" />
                                    RDD
                                </label>
                            </div>
                        </div>

                        <div className='button-container button-container-right'>
                            <div className='button'>HIZLI KAYDET</div>
                            <div className='button'>KAYDET VE GEÇ</div>
                            <div className='button'>HATA KAYIT</div>
                            <div className='montaj-no'>
                                <label>
                                    MONTAJ NO
                                    <input type="text"/>
                                </label>
                            </div>
                            <div className='button'>ARA</div>
                            <div className='button'>TERMİNAL İLK RESMİ</div>
                            <div className='button'>SIK GELEN HATA</div>
                            <div className='button'>MANİFEST</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
    )
}

export default DefectPage