import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime }) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timerId);
        }
    }, [timeLeft]);

    return (
        <div>
            <h1>{timeLeft}</h1>
        </div>
    );
};

export default Timer;
