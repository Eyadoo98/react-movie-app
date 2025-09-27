import React, {useEffect,useState} from 'react'
import {useDebounce} from "react-use";
import Search from "./component/Search.jsx";
import Spinner from "./component/spinner.jsx";
import MovieCard from "./component/MovieCard.jsx";
import Trending from "./component/Trending.jsx";
import {getTrendingMovie, updateSearchCount} from "./appwrite.js";

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
const App = () => {

    const[debounceSearchTerm, setDebounceSearchTerm] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const [movieList, setMovieList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const[isLoading, setIsLoading] = useState(false);

    const[trendingMovies, setTrendingMovies] = useState([]);


    useDebounce(()=>setDebounceSearchTerm(searchTerm),500,[searchTerm]);


    const fetchMovies = async (query = '') => {
        setIsLoading(true);
        setErrorMessage('');
        try{
            const endpoint = query
                ? `${API_BASE_URL}search/movie?query=${encodeURIComponent(query)}`
                :`${API_BASE_URL}discover/movie?sort_by=popularity.desc`;//This api fetch all movie

            const response = await fetch(endpoint, API_OPTIONS);//Fetch in js will make http request

            if (!response.ok) {
                throw new Error('Failed to load movies');
            }
            const data = await response.json();
           if (data.Response === false) {
            setErrorMessage(data.Error || 'Failed to fetch movies');
            setMovieList([]);
            return;
           }
           setMovieList(data.results || []);
            if(query && data.results.length > 0){
                await updateSearchCount(query , data.results[0]);
            }
        }catch(error){
            console.log(`Error fetchMovies movies ${error}`);
            setErrorMessage('Error fetching  movies please try again ...');
        }finally {
            setIsLoading(false);
        }
    }

    const loadTrendingMovies = async () => {
        try{
        const movies = await getTrendingMovie();
        setTrendingMovies(movies);
        }catch(error){
            console.log(`Error fetchMovies movies ${error}`);
        }
    }
    useEffect(()=>{
        fetchMovies(debounceSearchTerm);
    },[debounceSearchTerm]);
    //If it empties array [] it will render function one time when load component only if add variable it will load each time variable change


    useEffect(()=>{
        loadTrendingMovies();
    },[])
    return (
    <>
        <main>
            <div className="pattern" />

            <div className="wrapper">
                <header>
                    <img src="../public/images/hero.png" alt="Hero Banner"/>
                    <h1>Find <span className="text-gradient"> Movies </span> You'll Enjoy without The Hussle </h1>
                    <Search  search={searchTerm} setSearchTerm={setSearchTerm} />
                </header>

                {trendingMovies.length > 0 && (


                    <section className="trending">
                        <h2>Trending Movies</h2>
                        <ul>
                            {trendingMovies.map((movie,index)=>(
                                <Trending movie={movie} index={index} />
                            ))}
                        </ul>
                    </section>
                )}
                <div>


                </div>

                <section className="all-movies">
                    <h2>All Movies</h2>
                    {isLoading ? (
                       <Spinner />
                    ) : errorMessage ? <p className="red-500">{errorMessage}</p> :
                        (<ul>
                            {movieList.map((movie) => (

                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </ul>)
                    }
                    {errorMessage ? <p className="text-red-500">{errorMessage}</p> : null}
                </section>
                <h1 className="text-white">{searchTerm}</h1>
            </div>
        </main>
    </>
    )
}
export default App
