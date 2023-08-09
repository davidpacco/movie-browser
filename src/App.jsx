import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import './App.css'

function App() {
  const { movies } = useMovies()
  const { search, setSearch, error } = useSearch()


  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
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
