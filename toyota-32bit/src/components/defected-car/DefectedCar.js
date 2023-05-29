import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '../box/Box';
import dummyCar from '../../dummy-car.jpeg';
import DefectionSelectBox from '../defection-selectbox/DefectionSelectBox';
import "./defectedCar.css"
import cursor from "../../cursor5.png";

function DefectedCar() {
    const [jsonData, setJsonData] = useState('./picture-data.json');
    const [boxesData, setBoxesData] = useState([]);
    const [carImage, setCarImage] = useState(dummyCar);
    const [showDefectionSelectBox, setShowDefectionSelectBox] = useState(false);
    const [pointerCoords, setPointerCoords] = useState(null);
    const [x, setX] = useState(null);
    const [y, setY] = useState(null);

    useEffect(() => {
        axios.get(jsonData)
            .then(res => setBoxesData(res.data))
            .catch(error => console.error(error));

        return () => {
            const existingPointer = document.querySelector(".pointer");
            if (existingPointer) {
                existingPointer.remove();
            }
        };
    }, [jsonData]);

    const handlePointerClick = (event) => {
        if (jsonData === './picture-data2.json') {
            const existingPointer = document.querySelector(".pointer");
            if (existingPointer) {
                existingPointer.remove();
            }

            const pointer = document.createElement("div")
            pointer.className = "pointer"
            pointer.style.left = `${event.clientX}px`
            pointer.style.top = `${event.clientY}px`
            pointer.style.cursor = `url(${cursor}) 16 16, auto`;
            document.body.appendChild(pointer)

            const rect = event.target.getBoundingClientRect();
            const xCoord = event.clientX - rect.left;
            const yCoord = event.clientY - rect.top;

            setX(xCoord);
            setY(yCoord);
            setPointerCoords({ x: xCoord, y: yCoord });
        }
    };

    const handleBoxClick = (picAddress) => {
        if (jsonData === "./picture-data.json") {
            setCarImage(picAddress);
            setJsonData(jsonData === './picture-data.json' ? './picture-data2.json' : './picture-data.json');
        } else if (jsonData === "./picture-data2.json") {
            setShowDefectionSelectBox(true);
        }
    };

    return (
        <div className='defected-car-grid'>
            <div className="image-container" style={{ position: "relative" }} >
                <img src={carImage} alt="dummy-car" onClick={handlePointerClick} />
                {x !== null && y !== null && (
                    <div>
                        <p>X: {x}</p>
                        <p>Y: {y}</p>
                    </div>
                )}
                <div className="box-container">
                    {boxesData.map(({ defectButtonRecords }) => (
                        <div key={defectButtonRecords}>
                            {defectButtonRecords.map((boxData) => (
                                <div className='box-wrapper'>
                                    <Box
                                        key={boxData.buttonId}
                                        boxData={boxData}
                                        handleBoxClick={handleBoxClick}
                                        pointerCoords={pointerCoords}
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
