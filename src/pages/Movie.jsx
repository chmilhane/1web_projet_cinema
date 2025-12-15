import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieById } from "../api/omdb";

export default function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      const data = await getMovieById(id);
      setMovie(data);
      setLoading(false);
    }

    fetchMovie();
  }, [id]);

  if (loading) {
    return <p className="text-neutral-400">Chargement…</p>;
  }

  if (!movie || movie.Response === "False") {
    return <p className="text-neutral-400">Film introuvable.</p>;
  }

  const isMovie = movie.Type === "movie";
  const isSeries = movie.Type === "series";

  const dvdDate =
    movie.DVD && movie.DVD !== "N/A"
      ? new Date(movie.DVD).toLocaleDateString("fr-FR")
      : null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col gap-8">
      <button
        onClick={() => navigate(-1)}
        className="w-fit flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition cursor-pointer"
      >
        <img src="/icons/arrow.png" alt="Back" className="h-3 w-3" />
        <span>Retour</span>
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="shrink-0">
          {movie.Poster !== "N/A" ? (
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-72 rounded-sm ring-1 ring-white/15"
            />
          ) : (
            <div className="w-72 h-105 bg-black/30 flex items-center justify-center">
              <span className="text-neutral-500">Affiche non disponible</span>
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-1">
            {movie.Title}
            <span className="text-neutral-400 text-lg font-normal">
              {" "}({movie.Year})
            </span>
          </h1>

          <div className="flex flex-wrap gap-2 text-sm text-neutral-400 mb-4">
            <span>{movie.Genre}</span>
            <span className="text-neutral-600">•</span>
            <span>{movie.Runtime}</span>
            <span className="text-neutral-600">•</span>
            <span>{movie.Rated}</span>
            <span className="text-neutral-600">•</span>
            <span>{movie.Language}</span>
          </div>

          <p className="text-neutral-200 leading-relaxed mb-8">{movie.Plot}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div><span className="text-neutral-400">Réalisateur :</span> {movie.Director || "N/A"}</div>
            <div><span className="text-neutral-400">Scénario :</span> {movie.Writer || "N/A"}</div>
            <div><span className="text-neutral-400">Acteurs :</span> {movie.Actors || "N/A"}</div>
            <div><span className="text-neutral-400">Pays :</span> {movie.Country || "N/A"}</div>
            <div><span className="text-neutral-400">Récompenses :</span> {movie.Awards || "N/A"}</div>
            <div><span className="text-neutral-400">Production :</span> {movie.Production || "N/A"}</div>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <div className="bg-tertiary px-4 py-2 rounded-sm ring-1 ring-white/15">
              ⭐ IMDb {movie.imdbRating}/10 ({movie.imdbVotes})
            </div>

            {movie.Metascore !== "N/A" && (
              <div className="bg-tertiary px-4 py-2 rounded-sm ring-1 ring-white/15">
                🎯 Metascore {movie.Metascore}
              </div>
            )}

            {dvdDate && (
              <div className="bg-tertiary px-4 py-2 rounded-sm ring-1 ring-white/15">
                📀 DVD {dvdDate}
              </div>
            )}

            {isMovie && movie.BoxOffice !== "N/A" && (
              <div className="bg-tertiary px-4 py-2 rounded-sm ring-1 ring-white/15">
                💰 Box Office {movie.BoxOffice}
              </div>
            )}

            {isSeries && movie.totalSeasons && (
              <div className="bg-tertiary px-4 py-2 rounded-sm ring-1 ring-white/15">
                📺 {movie.totalSeasons} saisons
              </div>
            )}
          </div>

          {movie.Ratings?.length > 0 && (
            <div className="mt-6">
              <h3 className="uppercase tracking-widest text-sm mb-2">
                Notes
              </h3>
              <div className="flex flex-col gap-1 text-sm text-neutral-300">
                {movie.Ratings.map(rating => (
                  <div key={rating.Source}>
                    {rating.Source} : {rating.Value}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}