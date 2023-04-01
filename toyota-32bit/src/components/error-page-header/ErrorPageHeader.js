import React from 'react'
import "./errorPageHeader.css"

function ErrorPageHeader() {
    return (
        <div className='error-page-container-component'>
            <div className='container-left'>
                <div className='montaj-no-container'>
                    <div>MONTAJ NO</div>
                    <div>222</div>
                </div>
                <div className='body-no-container'>
                    <div>BODY NO</div>
                    <div>25073</div>
                </div>
                <div className='page-title-container'>
                    <div>HATA GİRİŞ EKRANI</div>
                </div>
            </div>
            
            <div className='container-right'>
                <div className='color-container'>
                    <div>Renk</div>
                    <div>305</div>
                </div>
                <div className='username-container'>
                    <div>User Name</div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPageHeader
