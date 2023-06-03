import React from 'react'
import "./terminalLogin.css"
import DateShift from "../../components/date-shift/DateShift"
import Button from "../../components/button/Button"
import Keyboard from "../../components/keyboard/Keyboard"
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { KeyboardContext } from '../../context/KeyboardContext'
import { useTranslation } from 'react-i18next'

function TerminalLogin() {
    const { t } = useTranslation();

    const { inputValues, handleInputFocused } = useContext(KeyboardContext)

    // FETCHING DATA
    const [veri, setVeri] = useState([])

    useEffect(() => {
        axios.get("./first-login.json")
            .then(res => setVeri(res.data))
            .catch(error => {
                console.log(error);
                setVeri("An error occurred while fetching data");
            });
    }, []);


    // LOGIN & CLOSE BUTTONS'S NAVIGATION
    let navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/defect-page")
    };

    const handleCloseClick = () => {
        navigate("/");
    };


    // FORMIK AND YUP
    const validationSchema = Yup.object().shape({
        sicilNo: Yup.string()
            .required('Sicil No giriniz!')
            .min(3, 'Sicil No en az 3 karakterli olmalı')
            .max(7, 'Sicil No en fazla 7 karakterli olmalı'),

        password: Yup.string()
            .required("Şifre giriniz!")
            .min(3, "Şifre en az 3 karakterli olmalı")
            .max(7, "Şifre en fazla 7 karakterli olmalı"),

        montajNo: Yup.string()
            .required("Montaj No giriniz!")
            .min(3, "Montaj No en az 3 karakterli olmalı")
            .max(7, "Montaj No en fazla 7 karakterli olmalı"),
    })

    const formik = useFormik({
        initialValues: {
            sicilNo: "",
            password: "",
            montajNo: ""
        },
        validationSchema,
        onSubmit: handleLoginClick
    })

    useEffect(() => {
        formik.setValues({
            sicilNo: inputValues.sicilNo,
            password: inputValues.password,
            montajNo: inputValues.montajNo
        });
    }, [inputValues, formik.setValues]);


    return (
        <div className='login-page-grid'>
            <div className='login-page-container'>
                <div className='row top-bar'>
                    <div className='terminal-name'>Terminal Name</div>
                </div>
                <div className='row'>
                    <div className='form-container'>

                        <div className='form-row terminal-list'>
                            <label>{t("form.Terminal List")}</label>
                            <div className='input-container'>
                                <select
                                    className={`select-terminal-list ${formik.touched.terminalList && formik.errors.terminalList ? 'error-input' : 'correct-input'}`}
                                    name="terminalList"
                                    onChange={formik.handleChange}
                                    value={formik.values.terminalList}
                                >
                                    {veri.map(({ termName }) => (
                                        <option key={veri.termId}>{termName}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className='form-row'>
                            <label>{t("form.Registiration No")}</label>
                            <div className='input-container'>
                                <input
                                    type="text"
                                    placeholder={t("form.Registiration No")}
                                    name="sicilNo"
                                    onChange={formik.handleChange}
                                    onFocus={() => handleInputFocused("sicilNo")}
                                    // onBlur={formik.handleBlur}
                                    value={formik.values.sicilNo}
                                    className={formik.touched.sicilNo && formik.errors.sicilNo ? 'error-input' : 'correct-input'}
                                />
                                {formik.touched.sicilNo && formik.errors.sicilNo ? (
                                    <div className="error-message">{formik.errors.sicilNo}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className='form-row'>
                            <label>{t("form.Password")}</label>
                            <div className='input-container'>
                                <input
                                    type="password"
                                    placeholder={t("form.Password")}
                                    name="password"
                                    onChange={formik.handleChange}
                                    onFocus={() => handleInputFocused("password")}
                                    // onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    className={formik.touched.password && formik.errors.password ? 'error-input' : 'correct-input'}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="error-message">{formik.errors.password}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className='form-row'>
                            <label>{t("common.Assembly No")}</label>
                            <div className='input-container'>
                                <input
                                    type="text"
                                    placeholder={t("common.Assembly No")}   
                                    name="montajNo"
                                    onChange={formik.handleChange}
                                    onFocus={() => handleInputFocused("montajNo")}
                                    // onBlur={formik.handleBlur}
                                    value={formik.values.montajNo}
                                    className={formik.touched.montajNo && formik.errors.montajNo ? 'error-input' : 'correct-input'}
                                />
                                {formik.touched.montajNo && formik.errors.montajNo ? (
                                    <div className="error-message">{formik.errors.montajNo}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className='form-row-date-shift'>
                            <DateShift />
                        </div>

                        <div className='form-row button-grid'>
                            <Button
                                className="giris"
                                onClick={formik.handleSubmit}
                                text={t("button.Login")}
                            />
                            <Button
                                className="kapat"
                                onClick={handleCloseClick}
                                text={t("button.Cancel")}
                            />
                        </div>
                    </div>
                </div>
                <div className='keyboard-component-grid'>
                    <Keyboard />
                </div>
            </div>
        </div>
    );

}

export default TerminalLogin
