import React from 'react';

const cardStyle = (url) => {
  return {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${url})`
  };
};

const Flat = ({ flat, selectFlat, selectedFlat }) => {
  return (
    <div className={(selectedFlat.name === flat.name) ? "card selected-card" : "card"} style={cardStyle(flat.imageUrl)}
      onClick={() => {selectFlat(flat)}}>
      <div className="card-category">{flat.price}</div>
      <div className="card-description">
        <h2>{flat.name}</h2>
      </div>
      <a className="card-link" href="#"></a>
    </div>
  );
};

export default Flat;
