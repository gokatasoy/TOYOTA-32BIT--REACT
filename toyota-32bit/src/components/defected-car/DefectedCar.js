import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '../box/Box';
import dummyCar from '../../dummy-car.jpeg';
import DefectionSelectBox from '../defection-selectbox/DefectionSelectBox';
import "./defectedCar.css"

function DefectedCar() {
    const [jsonData, setJsonData] = useState('./picture-data.json');
    const [boxesData, setBoxesData] = useState([]);
    const [carImage, setCarImage] = useState(dummyCar);
    const [showDefectionSelectBox, setShowDefectionSelectBox] = useState(false);

    useEffect(() => {
        axios.get(jsonData)
            .then(res => setBoxesData(res.data))
            .catch(error => console.error(error));
    }, [jsonData]);

    const handleBoxClick = (picAddress) => {
        if(jsonData==="./picture-data.json"){
            setCarImage(picAddress);
            setJsonData(jsonData === './picture-data.json' ? './picture-data2.json' : './picture-data.json');
        }else if(jsonData==="./picture-data2.json"){
            setShowDefectionSelectBox(true)
        }
    };

    return (
        <div className='defected-car-grid'>
            <div className="image-container">
                <img src={carImage} alt="dummy-car" />
                <div className="box-container">
                    {boxesData.map(({ defectButtonRecords }) => (
                        <div key={defectButtonRecords}>
                            {defectButtonRecords.map((boxData) => (
                                <div className='box-wrapper'>
                                    <Box
                                        key={boxData.buttonId}
                                        boxData={boxData}
                                        handleBoxClick={handleBoxClick}
                                    />                                  
                                </div>
                            ))}
                        </div>
                    ))}
                    <div>
                        {showDefectionSelectBox && <DefectionSelectBox />}    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefectedCar;