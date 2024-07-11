import React from 'react';
import EditStudent from './EditStudent';
import Popup from 'reactjs-popup';
import { CButton } from '@coreui/react';

const PopupEditStudent = ({ isOpen, onClose, idStudent }) => {
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
            <EditStudent id={idStudent} />
        </div>        
    </Popup>

  );
}

export default PopupEditStudent;