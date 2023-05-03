import React from 'react';

function Box({ boxData, handleBoxClick }) {
    const {
        buttonId,
        boxX,
        boxY,
        boxWidth,
        boxHeight,
        boxColor,
        labelColor,
        labelText,
        picAddress,
    } = boxData;

    return (
        <div
            key={buttonId}
            className="box"
            style={{
                left: boxX + 'px',
                top: boxY + 'px',
                width: boxWidth + 'px',
                height: boxHeight + 'px',
                border: `6px solid ${boxColor}`,
                borderRadius: '5px',
                color: labelColor,
            }}
            onClick={() => handleBoxClick(picAddress)}
        >
            <div
                className="label-text"
                style={{
                    padding: '2px',
                    width: '100%',
                    color: labelColor,
                    backgroundColor: 'white',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {labelText}
            </div>
        </div>
    );
}

export default Box;
