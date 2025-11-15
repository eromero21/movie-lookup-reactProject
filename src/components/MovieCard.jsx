
function MovieCard({movie}) {

    return (
        <div className="movie-card">
            {movie.Poster && movie.Poster != "N/A" && (
                <img src={movie.Poster} alt={movie.Title} width="200px" />
            )}
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <p>{movie.Type}</p>
            <p>IMDB Rating: {movie.imdbRating}</p>
        </div>
    );
}

export default MovieCard;