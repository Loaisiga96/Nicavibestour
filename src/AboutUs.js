import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('who_we_are')}</h1>
      <p>{t('description_who_we_are')}</p>
    </div>
  );
};

export default AboutUs;
