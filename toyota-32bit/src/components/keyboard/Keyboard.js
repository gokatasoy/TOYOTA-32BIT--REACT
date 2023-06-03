import React, { useState, useContext } from "react";
import "./keyboard.css"
import { KeyboardContext } from '../../context/KeyboardContext'
import { useTranslation } from 'react-i18next'


function Keyboard(props) {
    const { t } = useTranslation();

    const { handleKeyPressed } = useContext(KeyboardContext)

    const [shift, setShift] = useState(false);

    const keys = [
        [
            { className: "keys", label: t("keyboard.-"), value: t("keyboard.-") },
            { className: "keys", label: t("keyboard.1"), value: t("keyboard.1") },
            { className: "keys", label: t("keyboard.2"), value: t("keyboard.2") },
            { className: "keys", label: t("keyboard.3"), value: t("keyboard.3") },
            { className: "keys", label: t("keyboard.4"), value: t("keyboard.4") },
            { className: "keys", label: t("keyboard.5"), value: t("keyboard.5") },
            { className: "keys", label: t("keyboard.6"), value: t("keyboard.6") },
            { className: "keys", label: t("keyboard.7"), value: t("keyboard.7") },
            { className: "keys", label: t("keyboard.8"), value: t("keyboard.8") },
            { className: "keys", label: t("keyboard.9"), value: t("keyboard.9") },
            { className: "keys", label: t("keyboard.0"), value: t("keyboard.0") },
            { className: "keys delete-key", label: t("keyboard.Delete"), value: "delete" },
        ],
        [
            { className: "keys", label: t("keyboard.@"), value: t("keyboard.@") },
            { className: "keys", label: t("keyboard.q"), value: t("keyboard.q") },
            { className: "keys", label: t("keyboard.w"), value: t("keyboard.w") },
            { className: "keys", label: t("keyboard.e"), value: t("keyboard.e") },
            { className: "keys", label: t("keyboard.r"), value: t("keyboard.r") },
            { className: "keys", label: t("keyboard.t"), value: t("keyboard.t") },
            { className: "keys", label: t("keyboard.y"), value: t("keyboard.y") },
            { className: "keys", label: t("keyboard.u"), value: t("keyboard.u") },
            { className: "keys", label: t("keyboard.i"), value: t("keyboard.i") },
            { className: "keys", label: t("keyboard.o"), value: t("keyboard.o") },
            { className: "keys", label: t("keyboard.p"), value: t("keyboard.p") },
            { className: "keys", label: t("keyboard.double-dot"), value: t("keyboard.double-dot") },
            { className: "keys", label: t("keyboard.;"), value: t("keyboard.;") },
        ],
        [
            {
                label: t("keyboard.Shift"),
                value: "shift",
                className: `keys shift-key ${shift ? "active" : ""}`,
            },
            { className: "keys", label: t("keyboard.a"), value: t("keyboard.a") },
            { className: "keys", label: t("keyboard.s"), value: t("keyboard.s") },
            { className: "keys", label: t("keyboard.d"), value: t("keyboard.d") },
            { className: "keys", label: t("keyboard.f"), value: t("keyboard.f") },
            { className: "keys", label: t("keyboard.g"), value: t("keyboard.g") },
            { className: "keys", label: t("keyboard.h"), value: t("keyboard.h") },
            { className: "keys", label: t("keyboard.j"), value: t("keyboard.j") },
            { className: "keys", label: t("keyboard.k"), value: t("keyboard.k") },
            { className: "keys", label: t("keyboard.l"), value: t("keyboard.l") },
            { className: "keys", label: t("keyboard.?"), value: t("keyboard.?") },
            { className: "keys", label: t("keyboard.!"), value: t("keyboard.!") },
        ],
        [
            { className: "keys", label: t("keyboard.."), value: t("keyboard..") },
            { className: "keys", label: t("keyboard.,"), value: t("keyboard.,") },
            { className: "keys", label: t("keyboard.z"), value: t("keyboard.z") },
            { className: "keys", label: t("keyboard.x"), value: t("keyboard.x") },
            { className: "keys", label: t("keyboard.c"), value: t("keyboard.c") },
            { className: "keys", label: t("keyboard.v"), value: t("keyboard.v") },
            { className: "keys", label: t("keyboard.b"), value: t("keyboard.b") },
            { className: "keys", label: t("keyboard.n"), value: t("keyboard.n") },
            { className: "keys", label: t("keyboard.m"), value: t("keyboard.m") },
            { className: "keys", label: t("keyboard.<"), value: t("keyboard.<") },
            { className: "keys", label: t("keyboard.>"), value: t("keyboard.>") },
            { className: "keys enter-key", label: t("keyboard.Enter"), value: "enter" },

        ],
        [
            {
                label: t("keyboard.Space"),
                value: " ",
                className: "keys space-key",
            },
        ],
    ];

    const handleKeyPress = (key) => {
        if (key === "shift") {
            setShift(!shift);
        } else if (key === "delete") {
            props.handleKeyPressed("delete");
        } else {
            props.handleKeyPressed(shift ? key.handleKeyPressed() : key);
        }
    };


    return (
        <div className="keyboard-container">
            <div className="keyboard-grid">
                {keys.map((row, index) => (
                    <div key={index} >
                        {row.map(({ label, value, className }) => (
                            <button
                                key={label}
                                onClick={() => handleKeyPressed(value)}
                                className={className}
                            >
                                {shift ? label.toUpperCase() : label}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Keyboard;

