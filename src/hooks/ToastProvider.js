import React, { createContext, useContext, useRef } from 'react';
import { Toast } from 'primereact/toast';

export const ToastContext = createContext();

export const useToast = () => {
    return useContext(ToastContext);
};

export const ToastProvider = ({ children }) => {
    const toastRef = useRef(null);

    const showSuccess = (message) => {
        toastRef.current.show({ severity: 'success', summary: 'Success', detail: message });
    };

    const showInfo = (message) => {
        toastRef.current.show({ severity: 'info', summary: 'Info', detail: message });
    };

    const showWarn = (message) => {
        toastRef.current.show({ severity: 'warn', summary: 'Warning', detail: message });
    };

    const showError = (message) => {
        toastRef.current.show({ severity: 'error', summary: 'Error', detail: message });
    };

    return (
        <ToastContext.Provider value={{ showSuccess, showError, showInfo, showWarn }}>
            <Toast ref={toastRef} />
            {children}
        </ToastContext.Provider>
    );
};