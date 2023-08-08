import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import './App.css'



function App() {
  const { movies } = useMovies()

  return (
    <>
      <header>
        <h1>Movie browser</h1>
        <form action="">
          <input placeholder="Search..." type="text" />
          <button type='submit'>Search</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </>
  )
}

export default App
