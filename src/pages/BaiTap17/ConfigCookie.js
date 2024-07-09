import Cookies from 'js-cookie';

export const setCookie = (name, value, options = {}) => {
    const defaultOptions = {
        expires: 7,
        secure: true,
        sameSite: 'strict',
        path: '/'
    };

    const combinedOptions = { ...defaultOptions, ...options };

    Cookies.set(name, value, combinedOptions);
};

export const getCookie = (name) => {
    return Cookies.get(name);
};

export const deleteCookie = (name) => {
    Cookies.remove(name, { path: '/' });
};