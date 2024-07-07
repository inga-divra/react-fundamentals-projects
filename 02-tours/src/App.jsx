import { useState, useEffect } from "react";
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id != id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours)
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  if (tours.length === 0) {
    return <main>
      <div className="title">
        <h2>no tours left</h2>
        <button
          className="btn btn-no-tours"
          type="button"
          onClick={fetchTours}>
          refresh
        </button>
      </div>
    </main>
  }

  return <main>
    <Tours tours={tours} removeTour={removeTour} />
  </main>
};
export default App;
