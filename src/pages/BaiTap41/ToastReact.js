import React from 'react';
import { Button } from 'primereact/button';
import { showSuccessToast, showInfoToast, showErrorToast, showWarningToast } from '../../utils/utils';

const ToastReact = ({ toast }) => {

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <Button className='mx-5' label="Success" onClick={() => showSuccessToast(toast, 'Success', 'This is a success message!')} />
            <Button className='mx-5' label="Info" onClick={() => showInfoToast(toast, 'Info', 'This is an info message!')} />
            <Button className='mx-5' label="Warning" onClick={() => showWarningToast(toast, 'Warning', 'This is a warning message!')} />
            <Button className='mx-5' label="Error" onClick={() => showErrorToast(toast, 'Error', 'This is an error message!')} />
        </div>
    );
}

export default ToastReact;