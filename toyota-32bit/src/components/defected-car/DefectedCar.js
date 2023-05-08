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

    const [x, setX] = useState(null);
    const [y, setY] = useState(null);

    const handlePointerClick = (event) => {
        if (jsonData === './picture-data2.json') {
            // WHEN IT IS FOR THE SECOND TIME PREVIOUSLY CREATED POINTER WILL DISAPPEAR AND THE NEW CLICKED ONE WILL BE SHOWN
            const existingPointer = document.querySelector(".pointer");
            if (existingPointer) {
                existingPointer.remove();
            }
            //WE HAVE CREATED A DIV USING CREATEELEMENT METHOD AND AFTER THAT WE NAMED IT POINTER. AND WE GAVE IT A CLASSNAME.
            // IT IS POSITIONED AT THE LOCATION OF THE USER'S CLICK.
            // AND WITH THE APPENDCHILD METHOD WE HAVE ADDED THE NEW DIV UNDER THE PARENT ELEMENT
            const pointer = document.createElement("div")
            pointer.className = "pointer"
            pointer.style.left = `${event.clientX}px`
            pointer.style.top = `${event.clientY}px`
            pointer.style.cursor = `url(${cursor}) 16 16, auto`;
            document.body.appendChild(pointer)
    
            // THIS FUNCTION CALCULATES THE COORDINATESOF THE USER'S CLICK ACCORDING TO TOP-LEFT CORNER
            const rect = event.target.getBoundingClientRect();
            const xCoord = event.clientX - rect.left;
            const yCoord = event.clientY - rect.top;
    
            setX(xCoord);
            setY(yCoord);
        }
    };
    

    useEffect(() => {
        axios.get(jsonData)
            .then(res => setBoxesData(res.data))
            .catch(error => console.error(error));
    }, [jsonData]);



    const handleBoxClick = (picAddress) => {
        if (jsonData === "./picture-data.json") {
            setCarImage(picAddress);
            setJsonData(jsonData === './picture-data.json' ? './picture-data2.json' : './picture-data.json');
        } else if (jsonData === "./picture-data2.json") {
            setShowDefectionSelectBox(true)
        }
    };

    return (
        <div className='defected-car-grid'>
            <div className="image-container">
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