import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { useTextContext } from './TextContext';
import TextForm from './TextForm';

function Modal_AddText({ show, handleClose }) {
    const { texts, removeText } = useTextContext();
  return (
    <div>
        <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <span>Tất cả text</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TextForm />
                {texts.length === 0 ? (
                    <div className='d-flex justify-content-center align-items-center'>
                        <span>KHÔNG CÓ DỮ LIỆU</span>
                    </div>
                ) : (
                    texts.map((text, index) => (
                        <div className='d-flex mt-2 text-white px-1 py-2' key={index} style={{ backgroundColor: '#6D6D6D' }}>
                            <span>{index + 1}. {text}</span>
                            <button onClick={() => removeText(index)} className='ml-auto border-0 bg-transparent px-2'>
                                <span className='text-white'>X</span>
                            </button>
                        </div>
                    ))
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant='primary' onClick={() => console.log(">>> " + texts)} disabled={texts.length === 0}>
                    Chọn danh sách này
                </Button>
                <Button variant='secondary' onClick={handleClose}>
                    <span>Hủy bỏ</span>
                </Button>
            </Modal.Footer>
        </Modal>      
    </div>
  );
}

export default Modal_AddText;