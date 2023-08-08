/* eslint-disable react/prop-types */
function ListOfMovies({ movies }) {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
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
  const hasResults = movies.length > 0

  return (
    hasResults
      ? <ListOfMovies movies={movies} />
      : <NoMoviesToShow />
  )
}