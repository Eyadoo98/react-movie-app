import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const API_BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
    }
}

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMovieDetail = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${API_BASE_URL}movie/${id}?language=en-US`, API_OPTIONS);
                
                if (!response.ok) {
                    throw new Error('Failed to fetch movie details');
                }
                
                const data = await response.json();
                setMovie(data);
            } catch (err) {
                setError('Error loading movie details');
                console.error('Error fetching movie:', err);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchMovieDetail();
        }
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;
    if (!movie) return <div>Movie not found</div>;
  {console.log(movie)}

    return (
        <div className="movie-detail-page">
            <Link to="/" className="back-button text-white my-10">
                ← Back to Movies
            </Link>
          <div className="movie-detail-content max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden  my-10">
            {/* Poster and backdrop */}
            <div className="relative">
              <img
                src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-72 object-cover"
              />
              <div className="absolute bottom-4 left-4 flex items-center space-x-4">
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  className="w-28 rounded-xl shadow-md"
                />
                <h1 className="text-3xl font-bold text-white drop-shadow-lg">
                  {movie.title}
                </h1>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-6 space-y-4">
              <p className="text-gray-700 italic">{movie.tagline}</p>
              <p className="text-gray-800">{movie.overview}</p>

              {/* Genres */}
              <div className="flex flex-wrap gap-2">
                {movie.genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
              {genre.name}
            </span>
                ))}
              </div>

              {/* Extra details */}
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <p><strong>Release Date:</strong> {movie.release_date}</p>
                <p><strong>Runtime:</strong> {movie.runtime} min</p>
                <p><strong>Rating:</strong> ⭐ {movie.vote_average} ({movie.vote_count} votes)</p>
                <p><strong>Language:</strong> {movie.original_language.toUpperCase()}</p>
              </div>

              {/* Production countries */}
              <div>
                <strong>Countries:</strong>{" "}
                {movie.production_countries?.map((c) => c.name).join(", ")}
              </div>

              {/* Link to IMDb if available */}
              {movie.imdb_id && (
                <a
                  href={`https://www.imdb.com/title/${movie.imdb_id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                >
                  View on IMDb
                </a>
              )}
            </div>
          </div>
        </div>

    )
}

export default MovieDetail