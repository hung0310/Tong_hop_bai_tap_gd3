import React, { useState, useMemo } from 'react';

function DelayTime(number) {
    console.log('Start');
    const start = new Date();

    while((new Date() - start) < 3000);
    console.log('Finish', new Date() - start, 'ms');

    return number * number;
}

function DemoUseMemo() {
    const [count, setCount] = useState(0);

    // const number = DelayTime(10);

    const number = useMemo(() => {
        DelayTime(10);        
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <p>Number: {number}</p>
        </div>
    );
}

export default DemoUseMemo;