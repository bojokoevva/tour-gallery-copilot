import { useState, useEffect } from 'react' // Import React hooks
import './App.css' // Import CSS styles
import Gallery from './components/Gallery' // Import Gallery component

function App() {
  // State to store tours, loading status, and error message
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Function to fetch tours from the API
  const fetchTours = async () => {
    setLoading(true) // Set loading to true before fetching
    setError(null) // Reset error state
    try {
      const response = await fetch('https://course-api.com/react-tours-project') // Fetch data
      if (!response.ok) throw new Error('Failed to fetch tours') // Handle HTTP errors
      const data = await response.json() // Parse JSON response
      setTours(data) // Update tours state
    } catch (err) {
      setError(err.message) // Set error message if fetch fails
    } finally {
      setLoading(false) // Set loading to false after fetch
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  // Conditional rendering based on state
  if (loading) return <h1>Loading...</h1> // Show loading message
  if (error) return <h1>Error: {error}</h1> // Show error message
  if (tours.length === 0) return <button onClick={fetchTours}>Refresh</button> // Show refresh button if no tours

  return (
    <div className="app-container"> {/* Main app container */}
      <h1 className="title">Our Tours</h1> {/* Page title */}
      <Gallery tours={tours} setTours={setTours} /> {/* Render Gallery component */}
    </div>
  )
}

export default App // Export App component
