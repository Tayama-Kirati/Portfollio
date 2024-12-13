import React from "react";
import { useEffect } from "react";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=51cdefdb";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL} & s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
};

return (
  <div className="App">
    <h1> MovieLand</h1>
    <div className="search">
      <input placeholder="Serach for movies" 
      />
    </div>
  </div>
);
export default App;
