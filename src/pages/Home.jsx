import MovieCard from "../components/MovieCard";

import { getTrendingMovies } from "../api/trending";
import { useEffect, useState } from "react";

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      const movies = await getTrendingMovies();
      console.log(movies);
      
      setTrendingMovies(movies);
    }
    fetchTrendingMovies();
  }, []);

  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-lg uppercase tracking-widest">Films à l'affiche</h1>
        <div className="h-px bg-linear-to-r from-purple-400 via-pink-500 to-transparent rounded-full"></div>
      </div>

      <div className="mt-4 flex flex-wrap gap-6">
        {trendingMovies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}