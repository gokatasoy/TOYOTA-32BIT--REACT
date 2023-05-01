import React from 'react'
import "./bigFont.css"
import DefectPageHeader from '../../components/defect-page-header/DefectPageHeader'
import axios from 'axios'
import { useEffect, useState } from 'react'

const BigFont = () => {
    const [vehicleData,setVehicleData] = useState([]);
    useEffect(() => {
        axios.get("./vehicle-data.json")
            .then(res => setVehicleData(res.data))
            .catch(error => {
                console.log(error);
                setVehicleData("An error occured while fetching data");
            });
    }, [])

    return (
        <div className='BigFont-grid'>
            <div className='defect-page-header'>
                <DefectPageHeader/>
            </div>

            <div className='BigFont-grid-container'>
                <div className='BigFont-row'>
                        {vehicleData.map(({modelName, modelId}) => (
                            <div className='vehicle-data'>
                                <div>{modelName}</div>
                                <div>{modelId}</div>
                            </div>
                        ))}       
                    <div className='defect-entry-container'>
                        <h2>Defect Entry</h2>
                    </div>
                </div>
                <div className='BigFont-row'>
                    <div className='defect-data'>
                        <h2>Defect Data</h2>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default BigFont
