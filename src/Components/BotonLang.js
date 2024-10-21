import React from 'react';
import { useTranslation } from 'react-i18next';

const BotonLang = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
  };

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')} style={{ marginLeft: '10px' }}>Español</button>
    </div>
  );
};

export default BotonLang;
