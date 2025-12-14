const API_URL = "https://www.omdbapi.com/";
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export async function searchMovies(query, page = 1) {
  const res = await fetch(`${API_URL}?apikey=${API_KEY}&s=${query}&page=${page}`);
  return res.json();
}

export async function getMovieById(id) {
  const res = await fetch(`${API_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
  return res.json();
}