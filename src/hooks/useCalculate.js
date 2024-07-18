import { useState } from 'react';

export const useCalculate = () => {
    const [result, setResult] = useState(0);

    const addCalculate = (a, b) => {
        const sum = a + b;
        setResult(sum);
        return sum;
    };

    const subtractCalculate = (a, b) => {
        const sub = a - b;
        setResult(sub);
        return sub;
    };

    const multiplyCalculate = (a, b) => {
        const mutiply = a * b;
        setResult(mutiply); 
        return mutiply;
    };

    const devideCalculate = (a, b) => {
        if(b === 0) {
            alert('Invalid');
            return null;
        }
        const devide = a / b;
        setResult(devide);
        return devide;
    };

    return { result, addCalculate, subtractCalculate, multiplyCalculate, devideCalculate };
};