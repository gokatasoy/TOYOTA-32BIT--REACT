import React from 'react'
import "./errorPage.css"
import ErrorPageHeader from '../../components/error-page-header/ErrorPageHeader'
import dummyCar from "../../dummy-car.jpeg" 

function ErrorPage() {
    return (
        <div className='error-page-grid'>
            <div className='error-page-container'>
                <div className='header-container'>
                    <ErrorPageHeader/>
                </div>
                <div className='row'>                  
                    <div className='image-container'>
                        <img src={dummyCar} alt="dummy-car"/>
                        <div className='button-container button-container-bottom'>
                            <div className='button'>ÇIKIŞ</div>
                            <div className='button'>GERİ</div>
                            <div className='button'>MODEL İLK RESMİ</div>
                            <div className='button'>HATA LİSTESİ</div>
                            <div className='button'>TEMİZLE</div>
                            <div className='button'>BÜYÜK FONT</div>
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

export default ErrorPage
