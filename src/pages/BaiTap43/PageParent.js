import React from 'react';
import PageA from './PageA';
import PageB from './PageB';
import PageC from './PageC';

function PageParent() {
  return (
    <div>
        <div className='my-5 py-5'>
            <PageA />
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

export default PageParent;