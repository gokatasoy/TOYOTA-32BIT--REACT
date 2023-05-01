import React from 'react'
import "./defectPageHeader.css"
import axios from 'axios'
import { useState, useEffect } from 'react';

function DefectPageHeader() {
    const [veri, setVeri] = useState([]);
    useEffect(() => {
        axios.get("./header-data.json")
            .then(res => setVeri(res.data))
            .catch(error => {
                console.log(error);
                setVeri("An error occured while fetching data");
            })
    },[])

    return (
        <>
            {veri.map(({assyNo, bodyNo, extCode, bgColor, firstname, lastname, departmentCode}) => (
                <div className='defect-page-container-component'>
                    <div className='container-left'>
                        <div className='montaj-no-container'>
                            <div>MONTAJ NO</div>
                            <div>{assyNo}</div>
                        </div>
                        <div className='body-no-container'>
                            <div>BODY NO</div>
                            <div>{bodyNo}</div>
                        </div>
                        <div className='page-title-container'>
                            <div>HATA GİRİŞ EKRANI</div>
                        </div>
                    </div>
                    
                    <div className='container-right'>
                        <div className='color-container'>
                            <div>Renk</div>
                            <div>{extCode}</div>
                        </div>
                        <div className='username-container'>
                            <div>{firstname}</div>
                            <div>{lastname}</div>
                            <div>{departmentCode}</div>
                        </div>
                    </div>
                </div>
            ) )}
        </>
    )
}

export default DefectPageHeader
