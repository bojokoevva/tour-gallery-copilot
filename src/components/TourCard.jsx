import React from 'react' // Import React

function TourCard({ tour, removeTour }) {
  // Destructure tour properties
  const { id, name, info, image, price } = tour

  return (
    <div className="tour-card"> {/* Card container */}
      <img src={image} alt={name} className="tour-image" /> {/* Tour image */}
      <div className="tour-details"> {/* Tour details */}
        <h2 className="tour-name">{name}</h2> {/* Tour name */}
        <h4 className="tour-price">${price}</h4> {/* Tour price */}
        <p className="tour-info">{info}</p> {/* Tour description */}
        <button className="not-interested-btn" onClick={() => removeTour(id)}>Not Interested</button> {/* Remove tour button */}
      </div>
    </div>
  )
}

export default TourCard // Export TourCard component