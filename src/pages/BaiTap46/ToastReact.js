import React from 'react';
import { Button as PrimeButton } from 'primereact/button';
import { useToast } from '../../hooks/ToastProvider'; 

const ToastReact = () => { 

    const { showSuccess, showInfo, showError, showWarn } = useToast();

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <PrimeButton className='mx-5 rounded p-button-success' label="Success" onClick={() => showSuccess('This is a success message!')} />
            <PrimeButton className='mx-5 rounded p-button-info' label="Info" onClick={() => showInfo('This is an info message!')} />
            <PrimeButton className='mx-5 rounded p-button-warning' label="Warning" onClick={() => showWarn('This is a warning message!')} />
            <PrimeButton className='mx-5 rounded p-button-danger' label="Error" onClick={() => showError('This is an error message!')} />
        </div>
    );
}

export default ToastReact;