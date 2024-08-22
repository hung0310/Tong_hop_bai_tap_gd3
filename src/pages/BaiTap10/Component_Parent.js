import React, { useState } from 'react';
import Component_Child from './Component_Child';

const Component_Parent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1 className='d-flex justify-content-center align-items-center'>Value: {count}</h1>
      <Component_Child 
        onIncrement={incrementCount}
        onDecrement={decrementCount}
      />
    </div>
  );
};

export default Component_Parent;
