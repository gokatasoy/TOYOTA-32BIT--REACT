import React from 'react';

function Box({ boxData, handleBoxClick, pointerCoords }) {
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

    const getLineStyles = () => {
        if (pointerCoords) {
            const { x: pointerX, y: pointerY } = pointerCoords;
            const centerX = boxX + boxWidth / 2;
            const centerY = boxY + boxHeight / 2;

            const angle = Math.atan2(pointerY - centerY, pointerX - centerX) * (180 / Math.PI);
            const distance = Math.sqrt((pointerX - centerX) ** 2 + (pointerY - centerY) ** 2);

            return {
                position: 'absolute',
                top: centerY - boxY + 'px',
                left: centerX - boxX + 'px',
                width: distance + 'px',
                transformOrigin: '0 0',
                transform: `rotate(${angle}deg)`,
                borderTop: '2px solid blue',
            };
        }

        return {};
    };

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
                position: 'absolute', 
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
            {pointerCoords && (
                <div className="line" style={getLineStyles()}></div>
            )}
        </div>
    );
}

export default Box;
