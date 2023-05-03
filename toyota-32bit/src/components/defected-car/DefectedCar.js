import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '../box/Box';
import dummyCar from '../../dummy-car.jpeg';

function DefectedCar() {
    const [jsonData, setJsonData] = useState('./picture-data.json');
    const [boxesData, setBoxesData] = useState([]);
    const [carImage, setCarImage] = useState(dummyCar);

    useEffect(() => {
        axios.get(jsonData)
            .then(res => setBoxesData(res.data))
            .catch(error => console.error(error));
    }, [jsonData]);

    const handleBoxClick = (picAddress) => {
        setCarImage(picAddress);
        setJsonData(jsonData === './picture-data.json' ? './picture-data2.json' : './picture-data.json');
    };

    return (
        <div>
            <div className="image-container">
                <img src={carImage} alt="dummy-car" />
                <div className="box-container">
                    {boxesData.map(({ defectButtonRecords }) => (
                        <div key={defectButtonRecords}>
                            {defectButtonRecords.map((boxData) => (
                                <Box
                                    key={boxData.buttonId}
                                    boxData={boxData}
                                    handleBoxClick={handleBoxClick}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DefectedCar;
