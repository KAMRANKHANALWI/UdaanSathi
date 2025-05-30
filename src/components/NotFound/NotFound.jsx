import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page Not Found</p>
      <Link
        to="/"
        className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
