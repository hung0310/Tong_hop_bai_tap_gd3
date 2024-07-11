import React from 'react';
import AddStudent from './AddStudent';
import Popup from 'reactjs-popup';
import { CButton } from '@coreui/react';

const PopupAddStudent = ({ isOpen, onClose }) => {
  return (
    <Popup open={isOpen} close={onClose} modal>
        <div 
            className='row rounded' 
            style={{
                backgroundColor: "black",
                opacity: "0.8",
            }}
        >
            <div className='mx-2 d-flex justify-content-end pt-1'>
                <CButton 
                    type="submit" 
                    className='text-white py-1 px-4 fw-bold rounded' 
                    style={{
                        background: "#F4841F",
                        outline: "none",
                    }}
                    onClick={onClose}
                >
                    X
                </CButton>
            </div>
            <AddStudent />
        </div>        
    </Popup>

  );
}

export default PopupAddStudent;