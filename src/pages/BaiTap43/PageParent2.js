import React from 'react';
import PageB from './PageB';
import PageC from './PageC';
import PageD from './PageD';

function PageParent2() {
  return (
    <div>
        <div className='my-5 py-5'>
            <PageD />
        </div>

        <div className='my-5 py-5'>
            <PageB />
        </div>

        <div className='my-5 py-5'>
            <PageC />
        </div>
    </div>
  );
}

export default PageParent2;