import React, {useState} from 'react';
import Modal_AddText from './Modal_AddText';

function ContextAPI() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
      <div 
        className='d-flex justify-content-center align-items-center'
        style={{ height: '100vh' }} 
      >
        <button onClick={handleOpenModal} className='rounded border-0' style={{ backgroundColor: '#63CCFE', padding: '10px 30px'}}>
          <span style={{ fontSize: '50px' }} className='text-white'>+</span>
        </button>
        <Modal_AddText show={showModal} handleClose={handleCloseModal} />
      </div>      
  );
}

export default ContextAPI;