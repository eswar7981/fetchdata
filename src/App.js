import "./App.css";
import { useState, createContext } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoding] = useState(false);
  const [page,setPage]=useState(false)
  const dataHandler=()=>{

  const fetchMoviesHandler = async () => {
    setPage(false)
    setIsLoding(true)
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();

    const transformMovies = await data.results.map((moviedata) => {
      return {
        id: moviedata.episode_id,
        title: moviedata.title,
        openingText: moviedata.opening_crawl,
      };
    });
    setIsLoding(false)
    setMovies(transformMovies);
  };

  fetchMoviesHandler();
  }
 
  const  backHandler=()=>{
    setPage(true)
  }


  return (
    <>
     <button   onClick={dataHandler}>Click me </button>
     <button onClick={backHandler}>Back</button>
      {!page && movies.map((mov) => (
        <>
       
          <h1>{mov.id}</h1>
          <h1>{mov.title}</h1>
          <h1>{mov.openingText}</h1>
        </>
      ))}
      {isLoading && <h1>loading</h1>}
    </>
  );
}

export default App;
