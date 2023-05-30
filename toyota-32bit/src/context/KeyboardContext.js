import React, { createContext, useState } from "react"

export const KeyboardContext = createContext();

export const KeyboardProvider = ({ children }) => {
    // KEYBOARD FUNCTIONS
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [focusedInput, setFocusedInput] = useState("");
    const [inputValues, setInputValues] = useState({
        sicilNo: "",
        password: "",
        montajNo: "",
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

    const KeyboardData = {
        handleKeyPressed,
        handleInputFocused,
        isInputFocused,
        setIsInputFocused,
        focusedInput,
        setFocusedInput,
        inputValues,
        setInputValues
    }

    return (
        <KeyboardContext.Provider value={KeyboardData}>
            {children}
        </KeyboardContext.Provider>
    )
}