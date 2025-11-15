import './App.css'
import Search from './components/Search.jsx'
import {useState} from "react";
import MovieList from "./components/MovieList.jsx";

const API_KEY = "http://www.omdbapi.com/?i=tt3896198&apikey=adff099e";

function App() {
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState("");

    const handleSearch = async (query) => {
        console.log("Searching for: " + query);

        setStatus("loading");
        setError("");
        setMovies([]);

        try {
            const response = await fetch(
                `${API_KEY}&s=${encodeURIComponent(query)}`
            );

            const data = await response.json();
            console.log(data);
            if (data.Response === "False") {
                setStatus("error");
                setError(data.Error || "No results found");
                return;
            }

            setMovies(data.Search || []);
            setStatus("idle");
        } catch (err) {
            console.log(err);
            setStatus("error");
            setError("Error fetching movies. Please try again..");
        }
    }

    return (
      <div className="app-container">
          <h1>Movie Lookup</h1>
          <Search onSearch={handleSearch} />

          {status === "loading" && <p>Loading..</p>}
          {status === "error" && <p>${error}</p>}

          <MovieList movies={movies} />
      </div>
  )
}

export default App;
