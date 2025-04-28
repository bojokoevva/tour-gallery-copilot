import React, { useState, useEffect } from 'react'; // Import React hooks
import Gallery from './components/Gallery'; // Import Gallery component
import './App.css'; // Import styles

const App = () => {
  // State to store the list of tours
  const [tours, setTours] = useState([]);
  // State to track loading status
  const [loading, setLoading] = useState(true);
  // State to handle errors
  const [error, setError] = useState(null);

  // Function to fetch tours from the API
  const fetchTours = async () => {
    setLoading(true); // Start loading
    setError(null);   // Reset previous errors

    try {
      // Fetch data using CORS proxy
      const response = await fetch('https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project');
      if (!response.ok) throw new Error('Failed to fetch tours');
      const data = await response.json(); // Parse JSON data
      setTours(data); // Store tours in state
    } catch (err) {
      setError(err.message); // Set error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // useEffect to fetch tours when component mounts
  useEffect(() => {
    fetchTours(); // Initial fetch
  }, []);

// Function to remove a tour by its ID
const removeTour = (id) => {
  setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
};

// Conditional rendering: show loading message
if (loading) return <h2>Loading...</h2>;

// Conditional rendering: show error message
if (error) return <h2>Error: {error}</h2>;
