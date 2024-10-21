import React from 'react';
import { useTranslation } from 'react-i18next';

const Detalle = ({ isOpen, onClose, cardData }) => {
  const {t} = useTranslation();


  if (!isOpen) return null;  
  
  
  return (
    
    <div className="detalle-overlay">
      <div className="detalle-content">
        <h2>{cardData.sport} {t("detail.session")}</h2>
        <img src={cardData.imageSrc} alt={`${cardData.sport}`} />
        <p>{t("detail.length")}: {cardData.length}</p>
        <p>{t("detail.duration")}: {cardData.duration}</p>
        <p>{t("detail.route")}: {cardData.city}</p>
        <button onClick={onClose}>{t("detail.close")}</button>
      </div>
    </div>
  );
};

export default Detalle;
