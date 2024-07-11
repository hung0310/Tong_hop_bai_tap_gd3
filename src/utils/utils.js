export const showToast = (toastRef, severity, summary, detail) => {
    toastRef.current.show({ severity, summary, detail });
};

export const showCustomToast = (toastRef, type, summary, detail) => {
    switch(type) {
        case 'success':
            showToast(toastRef, 'success', summary, detail);
            break;
        case 'info':
            showToast(toastRef, 'info', summary, detail);
            break;
        case 'warning':
            showToast(toastRef, 'warn', summary, detail);
            break;
        case 'error':
            showToast(toastRef, 'error', summary, detail);
            break;
        default: 
            alert('Not found');
    }
};