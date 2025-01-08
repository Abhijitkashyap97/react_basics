import React, { useState, useEffect } from 'react';

function App() {
    const [count, setCount] = useState(0);
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);
    function add() {
        setCount((c) => c + 1);
    }

    function sub() {
        setCount((c) => c - 1);
    }

    useEffect(() => {
        document.title = `Count is ${count}`;
    }, [count]);
    useEffect(() => {window.addEventListener('resize', resize)},[]);
    
    function resize(){
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }
    return (
        <>
            <div>
                <p>Count is: {count}</p>
                <button onClick={add}>Add</button>
                <button onClick={sub}>Deduct</button>
                <p>Size of the window {height},{width}</p>
            </div>
        </>
    );
}

export default App;
