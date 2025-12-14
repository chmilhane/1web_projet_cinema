import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../api/omdb";
import MovieCard from "../components/MovieCard";

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!query) {
      setMovies([]);
      setPage(1);
      setTotalPages(1);
      setLoading(false);
      return;
    }

    setMovies([]);
    setPage(1);
    setTotalPages(1);
  }, [query]);

  useEffect(() => {
    if (!query) return;

    setLoading(true);

    async function fetchSearchResults() {
      const results = await searchMovies(query, page);

      setMovies(prev =>
        page === 1
          ? results.Search || []
          : [...prev, ...(results.Search || [])]
      );

      setTotalPages(Math.ceil((results.totalResults || 0) / 10));
      setLoading(false);
    }

    fetchSearchResults();
  }, [query, page]);

  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-lg uppercase tracking-widest">
          Résultats pour "{query}"
        </h1>
        <div className="h-px bg-linear-to-r from-purple-400 via-pink-500 to-transparent rounded-full"></div>
      </div>

      <div className="mt-4 flex flex-wrap gap-6">
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} lessData />
        ))}

        {!loading && movies.length === 0 && (
          <p className="text-neutral-400">Aucun résultat trouvé.</p>
        )}

        {loading && (
          <p className="text-neutral-400">Chargement des résultats...</p>
        )}

        {!loading && page < totalPages && (
          <div className="w-full flex justify-center mt-2">
            <button
              onClick={() => setPage(p => p + 1)}
              className="
                bg-blue-600 hover:bg-blue-700
                text-white
                px-4 py-2
                w-64
                ring-1 ring-white/15
                cursor-pointer
                rounded-sm
                focus:outline-none
                transition-colors
              "
            >
              Charger plus
            </button>
          </div>
        )}
      </div>
    </div>
  );
}