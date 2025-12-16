import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const queryUrl = new URLSearchParams(location.search).get("q") || "";

  const [query, setQuery] = useState(queryUrl);
  const [isFocused, setIsFocused] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isFocused) return;

    const timeout = setTimeout(() => {
      if (query.trim() === "") {
        navigate("/");
      } else {
        navigate(`/search?q=${query}`);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [query, isFocused, navigate]);

  return (
    <div className="flex flex-col w-full items-center bg-primary shadow-md">
      <div className="h-18 flex items-center justify-between w-full px-4 lg:px-8 max-w-7xl">
        <div></div>

        <div className="flex justify-center items-center w-full lg:w-auto">
          <input
            type="text"
            placeholder="Rechercher..."
            className="
              w-full lg:w-80 px-4 py-2
              bg-tertiary
              rounded-sm
              ring-1 ring-white/15
              focus:outline-none
              focus:ring-blue-500
              transition
            "
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
      </div>

      <div className="h-px bg-linear-to-r from-transparent via-white to-transparent opacity-50 w-full"></div>
    </div>
  );
}