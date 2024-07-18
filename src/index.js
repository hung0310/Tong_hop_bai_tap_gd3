import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
reportWebVitals();

// -------------------------------------------------------

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import App from './App';

// ReactDOM.render(
//     <GoogleOAuthProvider clientId="476408804045-98v4kp143nhq36ofvnp3t827uap2ljas.apps.googleusercontent.com">
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>
//     </GoogleOAuthProvider>,
//     document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import i18n from 'i18next';
// import { I18nextProvider } from 'react-i18next';
// import { initReactI18next } from 'react-i18next';

// import translationEN from './locales/en/en.json';
// import translationVI from './locales/vi/vi.json';

// i18n
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en: {
//         translation: translationEN
//       },
//       vi: {
//         translation: translationVI
//       }
//     },
//     lng: 'en',
//     fallbackLng: 'en',
//     interpolation: {
//       escapeValue: false
//     }
//   });

// ReactDOM.render(
//   <I18nextProvider i18n={i18n}>
//     <App />
//   </I18nextProvider>,
//   document.getElementById('root')
// );