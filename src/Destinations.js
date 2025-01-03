import React from 'react';
import { useTranslation } from 'react-i18next';

const Destinations = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('destinations')}</h1>
      <p>{t('description_destinations')}</p>
    </div>
  );
};

export default Destinations;
