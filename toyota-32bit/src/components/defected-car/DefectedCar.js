import React from 'react'
import dummyCar from "../../dummy-car.jpeg";
import axios from "axios";
import { useEffect, useState } from "react";

function DefectedCar() {
    const [boxesData, setBoxesData] = useState([]);

    useEffect(() => {
        axios
            .get("./picture-data.json")
            .then((res) => setBoxesData(res.data))
            .catch((error) => {
                console.log(error);
                setBoxesData("An error occured while fetching data.");
            });
    }, []);
    return (
        <div>
            <div className="image-container">
                            <img src={dummyCar} alt="dummy-car" />
                            <div className="box-container">
                                {boxesData.map(({ defectButtonRecords }) => (
                                    <div key={defectButtonRecords}>
                                        {defectButtonRecords.map(
                                            ({
                                                buttonId,
                                                boxX,
                                                boxY,
                                                boxWidth,
                                                boxHeight,
                                                boxColor,
                                                labelColor,
                                                labelText,
                                            }) => (
                                                <div
                                                    key={buttonId}
                                                    className="box"
                                                    style={{
                                                        left: boxX + "px",
                                                        top: boxY + "px",
                                                        width: boxWidth + "px",
                                                        height: boxHeight + "px",
                                                        border: `6px solid ${boxColor}`,
                                                        borderRadius:"5px",
                                                        color: labelColor,
                                                    }}
                                                >
                                                    <div 
                                                    className="label-text"
                                                    style={{
                                                        // // height: "50%",
                                                        padding:"2px",
                                                        width: "100%",
                                                        color: labelColor,
                                                        backgroundColor: "white",
                                                        position: "absolute",
                                                        top: 0,
                                                        left: 0,
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                    }}
                                                    >
                                                        {labelText}
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
        </div>
    )
}

export default DefectedCar
