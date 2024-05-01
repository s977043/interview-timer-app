import React from 'react';

const Alert = ({ message, isVisible }) => {
    if (!isVisible) return null;

    return (
        <div style={{ backgroundColor: 'red', color: 'white' }}>
            <p>{message}</p>
        </div>
    );
};

export default Alert;
