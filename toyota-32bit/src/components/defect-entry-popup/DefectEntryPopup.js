import React from 'react'
import "./defectEntryPopup.css"
import Keyboard from '../keyboard/Keyboard'
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'
import Button from '../button/Button';

function DefectEntryPopup({ onClose }) {

    // KEYBOARD FUNCTIONS
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [focusedInput, setFocusedInput] = useState("");
    const [inputValues, setInputValues] = useState({
        hataSorumlusu: "",
        hataSinifi: "",
        exitDepartment: "",
        aciklama: "",
        islem: "",
        altSorumlu: "",
        rdd: "",
    });

    const handleKeyPressed = (key) => {
        if (isInputFocused && focusedInput !== "") {
            if (key === 'delete') {
                setInputValues(prevValues => ({
                    ...prevValues,
                    [focusedInput]: prevValues[focusedInput].slice(0, -1)
                }));
            } else {
                setInputValues(prevValues => ({
                    ...prevValues,
                    [focusedInput]: prevValues[focusedInput] + key
                }));
            }
        }
    };

    const handleInputFocused = (inputName) => {
        setIsInputFocused(true);
        setFocusedInput(inputName);
    };

    // NAVIGATION
    const handlePopupClose = () => {
        onClose();
    };

    let navigate = useNavigate();

    const handleSaveClick = () => {
        navigate("/defect-page")
    };

    // FORMIK AND YUP
    const validationSchema = Yup.object().shape({
        hataSorumlusu: Yup.string()
            .required('Hata Sorumlusu giriniz!')
            .min(3, 'Hata Sorumlusu en az 3 karakterli olmalı')
            .max(7, 'Hata Sorumlusu en fazla 7 karakterli olmalı'),

        hataSinifi: Yup.string()
            .required("Hata Sınıfı giriniz!")
            .min(3, "Hata Sınıfı en az 3 karakterli olmalı")
            .max(7, "Hata Sınıfı en fazla 7 karakterli olmalı"),

        exitDepartment: Yup.string()
            .required("Exit Department giriniz!")
            .min(3, "Exit Department No en az 3 karakterli olmalı")
            .max(7, "Exit Department No en fazla 7 karakterli olmalı"),

        aciklama: Yup.string()
            .required("Açıklama giriniz!")
            .min(3, "Açıklama en az 3 karakterli olmalı")
            .max(7, "Açıklama en fazla 7 karakterli olmalı"),

        islem: Yup.string()
            .required("İşlem giriniz!")
            .min(3, "İşlem en az 3 karakterli olmalı")
            .max(7, "İşlem en fazla 7 karakterli olmalı"),

        altSorumlu: Yup.string()
            .required("Alt Sorumlu giriniz!")
            .min(3, "Alt Sorumlu en az 3 karakterli olmalı")
            .max(7, "Alt Sorumlu en fazla 7 karakterli olmalı"),

        rdd: Yup.string()
            .required("RDD giriniz!")
            .min(3, "RDD en az 3 karakterli olmalı")
            .max(7, "RDD en fazla 7 karakterli olmalı"),
    })

    const formik = useFormik({
        initialValues: {
            hataSorumlusu: "",
            hataSinifi: "",
            exitDepartment: "",
            aciklama: "",
            islem: "",
            altSorumlu: "",
            rdd: "",
        },
        validationSchema,
        onSubmit: handleSaveClick
    })

    useEffect(() => {
        formik.setValues({
            hataSorumlusu: inputValues.hataSorumlusu,
            hataSinifi: inputValues.hataSinifi,
            exitDepartment: inputValues.exitDepartment,
            aciklama: inputValues.aciklama,
            islem: inputValues.islem,
            altSorumlu: inputValues.altSorumlu,
            rdd: inputValues.rdd,
        });
    }, [inputValues, formik.setValues]);


    return (
        <div className='defect-entry-popup-grid'>
            <div className='defect-entry-popup-container'>
                <div className='row top-bar'>
                    <div className='terminal-name'>CVWQS</div>
                    <div className='common-defect'>SIK GELEN HATA</div>
                </div>
                <div className='row'>
                    <div className='form-container'>

                        <div className='form-row'>
                            <label>Hata Sorumlusu:</label>
                            <div className='input-container'>
                                <input
                                    type='text'
                                    name='hataSorumlusu'
                                    placeholder='hata sorumlusu'
                                    value={formik.values.hataSorumlusu}
                                    onChange={formik.handleChange}
                                    onFocus={() => handleInputFocused("hataSorumlusu")}
                                    className={formik.touched.hataSorumlusu && formik.errors.hataSorumlusu ? 'error-input' : 'correct-input'}
                                />
                                {formik.touched.hataSorumlusu && formik.errors.hataSorumlusu ? (
                                    <div className="error-message">{formik.errors.hataSorumlusu}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className='form-row'>
                            <label>Hata Sınıfı:</label>
                            <div className='input-container'>
                                <input
                                    type='text'
                                    name='hataSinifi'
                                    placeholder='hata sınıfı'
                                    value={formik.values.hataSinifi}
                                    onChange={formik.handleChange}
                                    onFocus={() => handleInputFocused("hataSinifi")}
                                    className={formik.touched.hataSinifi && formik.errors.hataSinifi ? 'error-input' : 'correct-input'}
                                />
                                {formik.touched.hataSinifi && formik.errors.hataSinifi ? (
                                    <div className="error-message">{formik.errors.hataSinifi}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className='form-row'>
                            <label>Exit Department:</label>
                            <div className='input-container'>
                                <input
                                    type='text'
                                    name='exitDepartment'
                                    placeholder='exit department'
                                    value={formik.values.exitDepartment}
                                    onChange={formik.handleChange}
                                    onFocus={() => handleInputFocused("exitDepartment")}
                                    className={formik.touched.exitDepartment && formik.errors.exitDepartment ? 'error-input' : 'correct-input'}
                                />
                                {formik.touched.exitDepartment && formik.errors.exitDepartment ? (
                                    <div className="error-message">{formik.errors.exitDepartment}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className='form-row'>
                            <label>Açıklama:</label>
                            <div className='input-container'>
                                <input
                                    type='text'
                                    name='aciklama'
                                    placeholder='açıklama'
                                    value={formik.values.aciklama}
                                    onChange={formik.handleChange}
                                    onFocus={() => handleInputFocused("aciklama")}
                                    className={formik.touched.aciklama && formik.errors.aciklama ? 'error-input' : 'correct-input'}
                                />
                                {formik.touched.aciklama && formik.errors.aciklama ? (
                                    <div className="error-message">{formik.errors.aciklama}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className='form-row'>
                            <label>Yapılan İşlem:</label>
                            <div className='input-container'>
                                <input
                                    type='text'
                                    name='islem'
                                    placeholder='yapılan işlem'
                                    value={formik.values.islem}
                                    onChange={formik.handleChange}
                                    onFocus={() => handleInputFocused("islem")}
                                    className={formik.touched.islem && formik.errors.islem ? 'error-input' : 'correct-input'}
                                />
                                {formik.touched.islem && formik.errors.islem ? (
                                    <div className="error-message">{formik.errors.islem}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className='form-row'>
                            <label>Alt Sorumlu:</label>
                            <div className='input-container'>
                                <input
                                    type='text'
                                    name='altSorumlu'
                                    placeholder='alt sorumlu'
                                    value={formik.values.altSorumlu}
                                    onChange={formik.handleChange}
                                    onFocus={() => handleInputFocused("altSorumlu")}
                                    className={formik.touched.altSorumlu && formik.errors.altSorumlu ? 'error-input' : 'correct-input'}
                                />
                                {formik.touched.altSorumlu && formik.errors.altSorumlu ? (
                                    <div className="error-message">{formik.errors.altSorumlu}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className='form-row'>
                            <label>RDD:</label>
                            <div className='input-container'>
                                <input
                                    type='text'
                                    name='rdd'
                                    placeholder='rdd'
                                    value={formik.values.rdd}
                                    onChange={formik.handleChange}
                                    onFocus={() => handleInputFocused("rdd")}
                                    className={formik.touched.rdd && formik.errors.rdd ? 'error-input' : 'correct-input'}
                                />
                                {formik.touched.rdd && formik.errors.rdd ? (
                                    <div className="error-message">{formik.errors.rdd}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className='form-row button-grid'>
                            <Button
                                className="save"
                                onClick={formik.handleSubmit}
                                text={"KAYDET"}
                            />
                            <Button
                                className="cancel"
                                onClick={handlePopupClose}
                                text={"İPTAL"}
                            />
                        </div>
                    </div>
                </div>
                <div className='keyboard-component-grid'>
                    <Keyboard onKeyPressed={handleKeyPressed} />
                </div>
            </div>
        </div>
    )
}

export default DefectEntryPopup
