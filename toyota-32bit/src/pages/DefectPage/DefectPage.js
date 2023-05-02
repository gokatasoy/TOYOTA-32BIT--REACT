import React from "react";
import "./defectPage.css";
import DefectPageHeader from "../../components/defect-page-header/DefectPageHeader";
import dummyCar from "../../dummy-car.jpeg";
import { useNavigate } from "react-router-dom";
import AssyNo from "../../components/assy-no/AssyNo";
import { useEffect, useState } from "react";
import axios from "axios";

function DefectPage() {
    let navigate = useNavigate();

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

    const handleCloseClick = () => {
        navigate("/");
    };

    const handleBackClick = () => {
        navigate("/terminal-login");
    };

    const handleDefectListClick = () => {
        navigate("/defect-list");
    };

    const handleBigFontClick = () => {
        navigate("/big-font");
    };

    return (
        <div className="defect-page-grid">
            <div className="defect-page-container">
                <div className="header-container">
                    <DefectPageHeader />
                </div>

                <div className="row">
                    {/* IMAGE CONTAINER */}
                    <div className="image-container" style={{position: "relative"}}>
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

                        <div className="button-container button-container-bottom">
                            <div className="button" onClick={handleCloseClick}>
                                ÇIKIŞ
                            </div>
                            <div className="button" onClick={handleBackClick}>
                                GERİ
                            </div>
                            <div className="button">MODEL İLK RESMİ</div>
                            <div className="button" onClick={handleDefectListClick}>
                                HATA LİSTESİ
                            </div>
                            <div className="button">TEMİZLE</div>
                            <div className="button" onClick={handleBigFontClick}>
                                BÜYÜK FONT
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="checkbox-container">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" />
                                    Harigami
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" />
                                    RDD
                                </label>
                            </div>
                        </div>

                        <div className="button-container button-container-right">
                            <div className="button">HIZLI KAYDET</div>
                            <div className="button">KAYDET VE GEÇ</div>
                            <div className="button">HATA KAYIT</div>
                            <div>
                                <AssyNo />
                            </div>
                            <div className="button">TERMİNAL İLK RESMİ</div>
                            <div className="button">SIK GELEN HATA</div>
                            <div className="button">MANİFEST</div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default DefectPage;
