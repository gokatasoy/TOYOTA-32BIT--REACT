import React, { useState } from "react";
import "./defectPage.css";
import DefectPageHeader from "../../components/defect-page-header/DefectPageHeader";
import DefectedCar from "../../components/defected-car/DefectedCar";
import { useNavigate } from "react-router-dom";
import AssyNo from "../../components/assy-no/AssyNo";
import DefectEntryPopup from "../../components/defect-entry-popup/DefectEntryPopup";
import AfkAlert from "../../components/afk-alert/AfkAlert";
import { useTranslation } from 'react-i18next'

function DefectPage() {
    const { t } = useTranslation();

    // AFK ALERT
    const [isUserActive, setIsUserActive] = useState(true);

    let navigate = useNavigate();

    const [showPopup, setShowPopup] = useState(false)

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

    const handlePopupclick = () => {
        setShowPopup(true)
    }

    const handlePopupClose = () => {
        setShowPopup(false)
    }


    return (
        <div className={`defect-page-grid ${isUserActive ? 'active' : 'inactive'}`}>
            <div className="defect-page-container">
                <div className="header-container">
                    <DefectPageHeader />
                </div>

                <div className="row">
                    <div className="col-1" style={{ position: "relative" }}>
                        <DefectedCar />
                        <div className="col-2 button-container button-container-bottom">
                            <div className="button" onClick={handleCloseClick}>
                                {t("button.Cancel")}
                            </div>
                            <div className="button" onClick={handleBackClick}>
                                {t("button.Back")}
                            </div>
                            <div className="button">{t("button.Model First Image")}</div>
                            <div className="button" onClick={handleDefectListClick}>
                                {t("button.Defect List")}
                            </div>
                            <div className="button">{t("button.Clear")}</div>
                            <div className="button" onClick={handleBigFontClick}>
                                {t("button.Big Font")}
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
                            <div className="button">{t("button.Quick Save")}</div>
                            <div className="button">{t("button.Save and Pass")}</div>
                            <div className="button" onClick={handlePopupclick}>{t("button.Defect Entry")}</div>
                            <div>
                                <AssyNo />
                            </div>
                            <div className="button">{t("button.Terminal First Image")}</div>
                            <div className="button">{t("button.Common Defect")}</div>
                            <div className="button">{t("button.Manifest")}</div>
                        </div>
                    </div>

                </div>
            </div>
            {showPopup && <DefectEntryPopup onClose={handlePopupClose} />}
            <AfkAlert isUserActive={isUserActive} setIsUserActive={setIsUserActive} />
        </div>
    );
}

export default DefectPage;
