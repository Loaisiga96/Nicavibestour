import React from 'react';
import { useTranslation } from 'react-i18next';

const OtherServices = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('other_services')}</h1>
      <p>{t('description_other_services')}</p>
    </div>
  );
};

export default OtherServices;
