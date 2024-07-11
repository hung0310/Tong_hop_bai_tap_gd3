export const showToast = (toastRef, severity, summary, detail) => {
    toastRef.current.show({ severity, summary, detail });
};

export const showSuccessToast = (toastRef, summary, detail) => {
    showToast(toastRef, 'success', summary, detail);
};

export const showInfoToast = (toastRef, summary, detail) => {
    showToast(toastRef, 'info', summary, detail);
};

export const showWarningToast = (toastRef, summary, detail) => {
    showToast(toastRef, 'warn', summary, detail);
};

export const showErrorToast = (toastRef, summary, detail) => {
    showToast(toastRef, 'error', summary, detail);
};