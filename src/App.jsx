import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import './App.css'
import debounce from 'just-debounce-it'
import { useMemo } from 'react'

function App() {
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search })
  const debounceMovies = useMemo(() => {
    return debounce(search => {
      getMovies({ search })
    }, 300)
  }, [getMovies])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debounceMovies(newSearch)
  }

  return (
    <>
      <header>
        <h1>Movie browser</h1>
        <form action='' onSubmit={handleSubmit}>
          <input autoComplete='off' name='query' onChange={handleChange} placeholder='Search...' type='text' value={search} />
          <button type='submit'>Search</button>
        </form>
        {error && <p>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </>
  )
}

export default App
