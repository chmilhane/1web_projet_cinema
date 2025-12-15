import MovieCard from "../components/MovieCard";
import { getTrendingMovies } from "../api/trending";
import { useEffect, useState } from "react";

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTrendingMovies() {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
      setLoading(false);
    }

    fetchTrendingMovies();
  }, []);

  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-lg uppercase tracking-widest">Films à l'affiche</h1>
        <div className="h-px bg-linear-to-r from-purple-400 via-pink-500 to-transparent rounded-full"></div>
      </div>

      <div className="mt-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {trendingMovies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}

        {loading && (
          <p className="text-neutral-400">Chargement des résultats...</p>
        )}
      </div>
    </div>
  );
}