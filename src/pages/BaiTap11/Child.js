import React from 'react';
import GrandChild from './GrandChild';

const Child = ({ value }) => {
  return (
    <div>
       <GrandChild value = { value } />
    </div>
  );
}

export default Child;