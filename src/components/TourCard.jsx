import React from 'react'; // Import React

// TourCard receives individual tour and removeTour function
function TourCard({ tour, removeTour }) {
  const { id, name, info, image, price } = tour; // Destructure tour details

  return (
    <div className="tour-card">
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        <h2 className="tour-name">{name}</h2>
        <h4 className="tour-price">${price}</h4>
        <p className="tour-info">{info}</p>
        {/* Remove button */}
        <button className="not-interested-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default TourCard;

