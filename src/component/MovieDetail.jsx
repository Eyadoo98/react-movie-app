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
                const response = await fetch(`${API_BASE_URL}movie/${id}`, API_OPTIONS);
                
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

    return (
        <div className="movie-detail-page">
            <Link to="/" className="back-button text-white">
                ← Back to Movies
            </Link>
            <div className="movie-detail-content">
                <h1 className="movie-title">{movie.title}</h1>
            </div>
        </div>
    )
}

export default MovieDetail