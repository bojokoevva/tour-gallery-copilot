import React from 'react';
import TourCard from './TourCard'; // Import TourCard component

// Gallery receives tours and removeTour
function Gallery({ tours, removeTour }) {
  return (
    <div className="gallery">
      {/* Render each tour card */}
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </div>
  );
}

export default Gallery;
