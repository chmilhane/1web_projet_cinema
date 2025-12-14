import MovieCard from "../components/MovieCard";

const FILLER_JSON_DATA = `{"Title":"Interstellar","Year":"2014","Rated":"PG-13","Released":"07 Nov 2014","Runtime":"169 min","Genre":"Adventure, Drama, Sci-Fi","Director":"Christopher Nolan","Writer":"Jonathan Nolan, Christopher Nolan","Actors":"Matthew McConaughey, Anne Hathaway, Jessica Chastain","Plot":"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.","Language":"English","Country":"United States, United Kingdom, Canada","Awards":"Won 1 Oscar. 45 wins & 148 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.7/10"},{"Source":"Rotten Tomatoes","Value":"73%"},{"Source":"Metacritic","Value":"74/100"}],"Metascore":"74","imdbRating":"8.7","imdbVotes":"2,439,092","imdbID":"tt0816692","Type":"movie","DVD":"N/A","BoxOffice":"$203,227,580","Production":"N/A","Website":"N/A","Response":"True"}`;
const movieData = JSON.parse(FILLER_JSON_DATA);

export default function Home() {
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-lg uppercase tracking-widest">Films à l'affiche</h1>
        <div className="h-px bg-linear-to-r from-purple-400 via-pink-500 to-transparent rounded-full"></div>
      </div>

      <div className="mt-4 flex flex-wrap gap-6">
        <MovieCard movie={movieData} />
        <MovieCard movie={movieData} />
        <MovieCard movie={movieData} />
        <MovieCard movie={movieData} />
        <MovieCard movie={movieData} />
      </div>
    </div>
  );
}