import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <article className="bg-tertiary w-50 rounded-sm ring-1 ring-white/15 overflow-hidden">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
          alt={`Affiche du film ${movie.Title}`}
          className="h-80 w-50 object-cover"
        />
        <div className="p-4 flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.98 10.101c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <span className="text-xs text-neutral-300">{movie.imdbRating}/10</span>
          </div>  
          <h2 className="text-lg font-semibold">{movie.Title} <span className="text-xs text-neutral-400 font-normal">({movie.Year})</span></h2>
          <p className="text-xs text-neutral-400">{movie.Director}</p>
        </div>
      </article>
    </Link>
  );
}