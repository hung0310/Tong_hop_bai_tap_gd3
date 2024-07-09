import React from 'react';
import { useTranslation } from 'react-i18next';

const MultiLanguage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='d-flex justify-content-center align-items-center mt-5'>
		<div className='row'>
			<h1>{t('hello')}</h1>
			<select onChange={(e) => changeLanguage(e.target.value)}>
				<option value="en">English</option>
				<option value="vi">Tiếng Việt</option>
			</select>
			<h1>{t('bye')}</h1>
		</div>
    </div>
  );
}

export default MultiLanguage;