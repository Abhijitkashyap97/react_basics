import React, { useState, useEffect } from "react";

function App() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    function formatTime() {
        const hours = time.getHours() % 12 || 12; // Convert to 12-hour format
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridian = time.getHours() >= 12 ? "PM" : "AM";
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`;
    }

    function padZero(number) {
        return number < 10 ? `0${number}` : number;
    }

    return (
        <>
            <div className="clockContainer">
                <div className="clock">
                    <span>{formatTime()}</span>
                </div>
            </div>
        </>
    );
}

export default App;
