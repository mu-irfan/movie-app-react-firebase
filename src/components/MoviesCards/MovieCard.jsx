import React, { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import EditMovieForm from "../EditMovieForm";

const MovieCard = ({ movie, fetchMovies, isLoggedIn }) => {
  const [showUpddateMovieForm, setShowUpdateMovieForm] = useState(false);

  const deleteMovie = async (id) => {
    const movieDoc = doc(db, "movies", id);
    await deleteDoc(movieDoc);
    fetchMovies();
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <img
        className="h-48 w-full object-cover"
        src={movie.banner}
        alt={movie.title}
      />
      <div className="px-4 py-4">
        <h3 className="text-lg font-medium text-gray-900">{movie.title}</h3>
        <div className="mt-1 text-sm text-gray-500">{movie.rating}</div>
        {isLoggedIn ? (
          <>
            <button
              className="bg-green-500 text-white font-normal mt-3 py-1 px-4 rounded hover:bg-green-700"
              onClick={() => setShowUpdateMovieForm(true)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white font-normal mt-3 ml-1 py-1 px-4 rounded hover:bg-red-700"
              onClick={() => deleteMovie(movie.id)}
            >
              Delete
            </button>
          </>
        ) : (
          <button className="bg-green-500 text-white font-normal mt-3 py-1 px-4 rounded hover:bg-green-700">
            Watch
          </button>
        )}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {showUpddateMovieForm && (
          <EditMovieForm
            showUpddateMovieForm={showUpddateMovieForm}
            setShowUpdateMovieForm={setShowUpdateMovieForm}
            fetchMovies={fetchMovies}
            id={movie.id}
            title={movie.title}
            rating={movie.rating}
            banner={movie.banner}
          />
        )}
      </div>
    </div>
  );
};

export default MovieCard;
