import React from 'react'
import "./bigFont.css"
import DefectPageHeader from '../../components/defect-page-header/DefectPageHeader'
import axios from 'axios'
import { useEffect, useState } from 'react'
import DefectEntryContainer from '../../components/defect-entry-container/DefectEntryContainer'

const BigFont = () => {

    // FETCH DATA
    const [vehicleData, setVehicleData] = useState([]);
    const [defectData, setDefectData] = useState([]);

    useEffect(() => {
        axios.get("./vehicle-data.json")
            .then(res => setVehicleData(res.data))
            .catch(error => {
                console.log(error);
                setVehicleData("An error occured while fetching data");
            });

        axios.get("./defect-data.json")
            .then(res => setDefectData(res.data))
            .catch(error => {
                console.log(error);
                setVehicleData("An error occured while fetching data.")
            });
    }, [])

    // AFK ALERT
    const [isUserActive, setIsUserActive] = useState(false)

    useEffect(() => {
        let activityTimer;

        const resetTimer = () => {
            clearTimeout(activityTimer);
            activityTimer = setTimeout(() => {
                setIsUserActive(false);
            }, 3000);
        };

        const handleUserActivity = () => {
            setIsUserActive(true);
            resetTimer();
        };

        window.addEventListener('mousemove', handleUserActivity);
        window.addEventListener('keydown', handleUserActivity);

        return () => {
            window.removeEventListener('mousemove', handleUserActivity);
            window.removeEventListener('keydown', handleUserActivity);
            clearTimeout(activityTimer);
        };
    }, []);


    return (
        <div className={`BigFont-grid ${isUserActive ? 'active' : 'inactive'}`}>
            <div className='defect-page-header'>
                <DefectPageHeader />
            </div>

            <div className='BigFont-grid-container'>
                <div className='BigFont-row vehicle'>
                    {vehicleData.map(({ modelName, modelId }) => (
                        <div className='vehicle-data'>
                            <div>{modelName}</div>
                            <div>{modelId}</div>
                        </div>
                    ))}
                    <div className='defect-entry-container'>
                        <DefectEntryContainer />
                    </div>
                </div>
                <div className='BigFont-row defect'>
                    {defectData.map(({ partName, defectName }) => (
                        <div className='defect-data'>
                            <div>{partName}</div>
                            <div style={{ margin: "0 .3rem" }}>-</div>
                            <div>{defectName}</div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default BigFont
