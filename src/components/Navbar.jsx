import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const queryUrl = new URLSearchParams(window.location.search).get("q") || "";
  const [query, setQuery] = useState(queryUrl);

  const navigate = useNavigate();

  const onSearch = () => {
    if (query.trim() === "") {
      navigate("/");
      return;
    };

    navigate(`/search?q=${query}`);
  }

  return (
    <div className="flex flex-col w-full items-center bg-primary shadow-md">
      <div className="h-18 flex items-center justify-between w-full px-8 max-w-7xl">
        <div></div>
        <div className="flex justify-center items-center">
          <div
            className="
              flex
              ring-1 ring-white/15
              rounded-sm
              focus-within:ring-1
              focus-within:ring-blue-500
              transition
            "
          >
            <input
              type="text"
              placeholder="Rechercher..."
              className="
                w-80 px-4 py-2
                bg-tertiary
                rounded-l-sm
                focus:outline-none
              "
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') onSearch(); }}
            />

            <button
              onClick={onSearch}
              className="
                bg-blue-600 hover:bg-blue-700
                cursor-pointer
                text-white
                px-4 py-2
                rounded-r-sm
                focus:outline-none
              "
            >
              <img src="./icons/search.png" alt="Search" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="h-px bg-linear-to-r from-transparent via-white to-transparent opacity-50 w-full"></div>
    </div>
  );
}