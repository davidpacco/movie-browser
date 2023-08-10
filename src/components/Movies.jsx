/* eslint-disable react/prop-types */
function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map(movie => (
        <li className="movie" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={`${movie.title} poster`} />
        </li>
      ))}
    </ul>
  )
}

function NoMoviesToShow() {
  return (
    <p>No Result Found</p>
  )
}

export function Movies({ movies }) {
  const hasResults = movies?.length > 0

  return (
    hasResults
      ? <ListOfMovies movies={movies} />
      : <NoMoviesToShow />
  )
}