import { getMovieById } from "./omdb";

const TRENDING_IDS = [
  // Interstellar
  "tt0816692", 
  // Lost Highway
  "tt0116922",
  // Donnie Darko
  "tt0246578",
  // Pulp Fiction
  "tt0110912",
  // Fight Club
  "tt0137523",
];

export async function getTrendingMovies() {
  const requests = TRENDING_IDS.map(id => getMovieById(id));

  const movies = await Promise.all(requests);
  return movies;
}