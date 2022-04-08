import React from 'react'
import {useEffect, useState} from "react"
import Movie from '../movie/Movie'
import './movies.scss'
import Loader from '../loader/Loader'

const Movies = () => {
    const [movies, setMovies] = useState([]);
    // const [types, setTypes] = useState([]);
    // const [errorMsg, setErrorMsg] = useState();
  
    useEffect(() => {
      fetch("https://api.themoviedb.org/3/movie/550?api_key=234ee242c8d3830476fc82cb685088e1")
        .then((response) => response.json())
        .then((data) => setMovies(data))
        // .catch((error) => setErrorMsg(error.message));
    }, []);
  
    
    return (
      <div>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Movie
              key={movie.id}
             name={movie.name}
              origin_country={movie.origin_country}
              
              
            />
          ))
        ) : (
          <Loader />
        )}
  
       
      </div>
    );
  };
  
  export default Movies;