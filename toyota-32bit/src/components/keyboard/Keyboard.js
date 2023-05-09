import React, { useState } from "react";
import "./keyboard.css"

function VirtualKeyboard(props) {
    const [shift, setShift] = useState(false);

    const keys = [
        [
            { label: "-", value: "hyphen" },
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5", value: "5" },
            { label: "6", value: "6" },
            { label: "7", value: "7" },
            { label: "8", value: "8" },
            { label: "9", value: "9" },
            { label: "0", value: "0" },
            { label: "Delete", value: "delete" },
        ],
        [
            { label: "Tab", value: "tab" },
            { label: "q", value: "q" },
            { label: "w", value: "w" },
            { label: "e", value: "e" },
            { label: "r", value: "r" },
            { label: "t", value: "t" },
            { label: "y", value: "y" },
            { label: "u", value: "u" },
            { label: "i", value: "i" },
            { label: "o", value: "o" },
            { label: "p", value: "p" },
            { label: "ğ", value: "ğ" },
            { label: "ü", value: "ü" },
        ],
        [
            {
                label: "Shift",
                value: "shift",
                className: `shift-key ${shift ? "active" : ""}`,
            },
            { label: "a", value: "a" },
            { label: "s", value: "s" },
            { label: "d", value: "d" },
            { label: "f", value: "f" },
            { label: "g", value: "g" },
            { label: "h", value: "h" },
            { label: "j", value: "j" },
            { label: "k", value: "k" },
            { label: "l", value: "l" },
            { label: "ş", value: "ş" },
            { label: "i", value: "i" },
        ],
        [
            { label: "&lt;", value: "less-than" },
            { label: "&gt;", value: "greater-than" },
            { label: "z", value: "z" },
            { label: "x", value: "x" },
            { label: "c", value: "c" },
            { label: "v", value: "v" },
            { label: "b", value: "b" },
            { label: "n", value: "n" },
            { label: "m", value: "m" },
            { label: "ö", value: "ö" },
            { label: "ç", value: "ç" },
            { label: ".", value: "." },
            { label: ",", value: "," },
        ],
        [
            {
                label: "Space",
                value: " ",
                className: "space-key",
            },
        ],
    ];

    const handleKeyPress = (key) => {
        if (key === "shift") {
            setShift(!shift);
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

export default VirtualKeyboard;

