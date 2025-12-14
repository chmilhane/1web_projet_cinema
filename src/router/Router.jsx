import { BrowserRouter, Routes, Route } from "react-router-dom";

import Default from "../layouts/Default";

import Home from "../pages/Home";
import Search from "../pages/Search";
import Movie from "../pages/Movie";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="movie/:id" element={<Movie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}