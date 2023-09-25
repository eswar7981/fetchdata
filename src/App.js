import "./App.css";
import { useState, createContext } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoding] = useState(false);
  const [error, setError] = useState(null);
  const [retrys, setRetry] = useState(true);
     

  console.log("firstTime")


  const fetchMoviesHandler = async () => {
    setIsLoding(true);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/film/");

      if (retrys) {
        console.log("jd")
        setIsLoding(false);

  
      
       
      throw new Error("something went wrong retrying...")
      }
      const data = await response.json();
      const transformMovies = data.results.map((moviedata) => {
        return {
          id: moviedata.episode_id,
          title: moviedata.title,
          openingText: moviedata.opening_crawl,
        };
      });

      setMovies(transformMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoding(false);
  };

  const retryHandler = () => {
    setRetry(false);
    console.log(retrys)
  };

  return (
    <>
      <button onClick={fetchMoviesHandler}>Click me </button>
      <button onClick={retryHandler}>Cancel</button>
      {!isLoading &&
        movies.map((mov) => (
          <>
            <h1>{mov.id}</h1>
            <h1>{mov.title}</h1>
            <h1>{mov.openingText}</h1>
          </>
        ))}
      {isLoading && <h1>loading</h1>}
      {error && <p>{error}</p>}
    </>
  );
}

export default App;
