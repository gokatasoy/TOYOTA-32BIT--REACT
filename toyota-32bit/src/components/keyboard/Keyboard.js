import React, { useState } from "react";
import "./keyboard.css"

function Keyboard(props) {
    const [shift, setShift] = useState(false);

    const keys = [
        [
            { className:"keys", label: "-", value: "hyphen" },
            { className:"keys", label: "1", value: "1" },
            { className:"keys", label: "2", value: "2" },
            { className:"keys", label: "3", value: "3" },
            { className:"keys", label: "4", value: "4" },
            { className:"keys", label: "5", value: "5" },
            { className:"keys", label: "6", value: "6" },
            { className:"keys", label: "7", value: "7" },
            { className:"keys", label: "8", value: "8" },
            { className:"keys", label: "9", value: "9" },
            { className:"keys", label: "0", value: "0" },
            { className:"keys delete-key", label: "Delete", value: "delete" },
        ],
        [
            { className:"keys", label: "Tab", value: "tab" },
            { className:"keys", label: "q", value: "q" },
            { className:"keys", label: "w", value: "w" },
            { className:"keys", label: "e", value: "e" },
            { className:"keys", label: "r", value: "r" },
            { className:"keys", label: "t", value: "t" },
            { className:"keys", label: "y", value: "y" },
            { className:"keys", label: "u", value: "u" },
            { className:"keys", label: "i", value: "i" },
            { className:"keys", label: "o", value: "o" },
            { className:"keys", label: "p", value: "p" },
            { className:"keys", label: "ğ", value: "ğ" },
            { className:"keys", label: "ü", value: "ü" },
        ],
        [
            {
                label: "Shift",
                value: "shift",
                className: `keys shift-key ${shift ? "active" : ""}`,
            },
            { className:"keys", label: "a", value: "a" },
            { className:"keys", label: "s", value: "s" },
            { className:"keys", label: "d", value: "d" },
            { className:"keys", label: "f", value: "f" },
            { className:"keys", label: "g", value: "g" },
            { className:"keys", label: "h", value: "h" },
            { className:"keys", label: "j", value: "j" },
            { className:"keys", label: "k", value: "k" },
            { className:"keys", label: "l", value: "l" },
            { className:"keys", label: "ş", value: "ş" },
            { className:"keys", label: "i", value: "i" },
        ],
        [
            { className:"keys", label: "<", value: "less-than" },
            { className:"keys", label: ">", value: "greater-than" },
            { className:"keys", label: "z", value: "z" },
            { className:"keys", label: "x", value: "x" },
            { className:"keys", label: "c", value: "c" },
            { className:"keys", label: "v", value: "v" },
            { className:"keys", label: "b", value: "b" },
            { className:"keys", label: "n", value: "n" },
            { className:"keys", label: "m", value: "m" },
            { className:"keys", label: "ö", value: "ö" },
            { className:"keys", label: "ç", value: "ç" },
            { className:"keys", label: ".", value: "." },
            { className:"keys", label: ",", value: "," },
        ],
        [
            {
                label: "Space",
                value: " ",
                className: "keys space-key",
            },
        ],
    ];

    const handleKeyPress = (key) => {
        if (key === "shift") {
            setShift(!shift);
        } else if (key === "delete") {
            props.onKeyPressed("delete");
        } else {
            props.onKeyPressed(shift ? key.toUpperCase() : key);
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
                                onClick={() => handleKeyPress(value)}
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

