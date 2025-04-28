import React from 'react' // Import React
import TourCard from './TourCard' // Import TourCard component

function Gallery({ tours, setTours }) {
  // Function to remove a tour by ID
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id)) // Filter out the removed tour
  }

  return (
    <div className="gallery"> {/* Gallery container */}
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} removeTour={removeTour} /> // Render a TourCard for each tour
      ))}
    </div>
  )
}

export default Gallery // Export Gallery component