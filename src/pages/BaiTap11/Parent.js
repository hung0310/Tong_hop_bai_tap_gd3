import React, {useState} from 'react';
import Child from './Child';

function Parent() {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <button 
                className='text-white py-2 px-4 fw-bold mx-4'
                style={{
                    borderRadius: "8px",
                    border: "2px solid var(--foundation-orange-light-hover, #FDEBDD)",
                    background: "var(--Foundation-orange-Normal, #F4841F)",
                    outline: "none",
                    border: "1px solid orange"
                }}
                onClick={incrementCount}
            >
                Button
            </button>
            <Child value={count} />
        </div>
    );
}

export default Parent;