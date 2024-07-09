import React from 'react';
import { useSelector } from 'react-redux';

const GrandChild = () => {
  const count = useSelector(state => state.count);

  return <h1>Value: {count}</h1>;
};

export default GrandChild;