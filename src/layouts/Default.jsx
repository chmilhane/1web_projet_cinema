import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

export default function DefaultLayout() {
  return (
    <div className="bg-secondary min-h-dvh flex flex-col items-center">
      <Navbar />

      <div className="px-8 w-full max-w-7xl mt-8">
        <Outlet />
      </div>
    </div>
  );
}