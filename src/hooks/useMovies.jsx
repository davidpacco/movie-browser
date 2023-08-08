import { useState, useEffect } from "react"

export function useMovies () {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://www.omdbapi.com/?apikey=4287ad07&s=avengers')
      .then(res => res.json())
      .then(data => setMovies(data.Search))
  }, [])

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return { movies: mappedMovies }
}