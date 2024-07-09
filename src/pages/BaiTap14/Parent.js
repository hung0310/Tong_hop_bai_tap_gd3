import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from './Action';
import Child from './Child';

const Parent = () => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-center align-items-center">
      <button
        className="text-white py-2 px-4 fw-bold mx-4"
        style={{
          borderRadius: "8px",
          border: "2px solid var(--foundation-orange-light-hover, #FDEBDD)",
          background: "var(--Foundation-orange-Normal, #F4841F)",
          outline: "none",
          border: "1px solid orange",
        }}
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
      <Child />
    </div>
  );
};

export default Parent;