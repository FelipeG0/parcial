import React, { useState } from 'react';
import Detalle from './Detalle';

const SportCards = ({ sportsData = [] }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (cardData) => {
    setSelectedCard(cardData);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="sport-cards-container">
      {sportsData.map(({ sport, length, duration, city, imageUrl }) => (
        <div key={sport} className="sport-column">
          <div className="main-card" onClick={() => openModal({ sport, length, duration, city, imageUrl })}>
            <img src={imageUrl} alt={`${sport}`} className="main-card-image" />
            <div className="main-card-details">
              <h4>{`${sport} Session`}</h4>
              <p>{`Recorrido alrededor de ${city}`}</p>
              <p>{`${length} - ${duration}`}</p>
            </div>
          </div>

          <div className="sport-cards-grid">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="card small-card"
                onClick={() => openModal({ sport, length, duration, city, imageUrl })}
              >
                <img src={imageUrl} alt={`${sport}`} className="small-card-image" />
                <div className="card-details">
                  <p>{`${length} - ${duration}`}</p>
                  <p>{city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <Detalle isOpen={isModalOpen} onClose={closeModal} cardData={selectedCard} />
    </div>
  );
};

export default SportCards;

