import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();  // Esto te da acceso a la instancia de i18next

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);  // Cambia el idioma según el código de idioma proporcionado
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
    </div>
  );
};

export default LanguageSwitcher;
