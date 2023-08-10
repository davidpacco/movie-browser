import { useRef, useState, useCallback } from "react"
import { seachMovies } from "../services/movies"

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
      if (search === previousSearch.current) return
      try {
        previousSearch.current = search
        const movieList = await seachMovies({ search })
        setMovies(movieList)
      } catch (e) {
        console.error(e)
      }
    }
  , [])

  return { movies, getMovies }
}