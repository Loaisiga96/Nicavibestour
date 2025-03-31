import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

// Configuración de i18next
i18n
  .use(initReactI18next) // Inicializa i18next con React
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      es: {
        translation: translationES
      }
    },
    lng: 'en', // Idioma por defecto
    fallbackLng: 'en', // Idioma de respaldo en caso de que no se encuentre una traducción
    interpolation: {
      escapeValue: false // React ya se encarga de escapar los valores
    }
  });

export default i18n;
