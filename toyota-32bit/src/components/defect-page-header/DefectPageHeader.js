import React from 'react'
import "./defectPageHeader.css"
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'

function DefectPageHeader() {
    const { t } = useTranslation();

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
                            <div>{t("common.Assembly No")}</div>
                            <div>{assyNo}</div>
                        </div>
                        <div className='body-no-container'>
                            <div>{t("common.Body No")}</div>
                            <div>{bodyNo}</div>
                        </div>
                        <div className='page-title-container'>
                            <div>{t("common.Defect Entry Page")}</div>
                        </div>
                    </div>
                    
                    <div className='container-right'>
                        <div style={{backgroundColor: bgColor}} className='color-container'>
                            <div>{t("common.Color")}</div>
                            <div>{extCode}</div>
                        </div>
                        <div className='username-container'>
                            <div style={{marginRight: ".5rem"}}>{firstname}</div>
                            <div style={{marginRight: ".5rem"}}>{lastname}</div>
                            <div>({departmentCode})</div>
                        </div>
                    </div>
                </div>
            ) )}
        </>
    )
}

export default DefectPageHeader
