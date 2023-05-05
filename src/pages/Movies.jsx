import React, { useState, useEffect, useCallback } from "react";
import { db } from "../config/firebase";
import { useNavigate } from "react-router";
import { getDocs, collection } from "@firebase/firestore";
import MovieCard from "../components/MoviesCards/MovieCard";
import AddMovieForm from "../components/AddMovieForm";

const Movies = ({ isLoggedIn }) => {
  const [movies, setMovies] = useState([]);
  const [showMovieForm, setShowMovieForm] = useState(false);
  const navigate = useNavigate();
  const moviesCollection = collection(db, "movies");



  const fetchMovies = useCallback(async () => {
    try {
      const getMoviesList = await getDocs(moviesCollection);
      const filteredData = getMoviesList.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMovies(filteredData);
    } catch (error) {
      console.error(error);
    }
  }, [moviesCollection]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies, moviesCollection]);

  

  return (
    <div>
      <div className="bg-gray-100">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 flex justify-between px-20 py-4">
          <h1 className="text-3xl font-bold text-white">Movies</h1>
          <div className="flex items-center">
            {isLoggedIn ? (
              <>
                <button
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mr-2"
                  onClick={() => setShowMovieForm(true)}
                >
                  Add Movie
                </button>
               
                <button
                  className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-700"
                  onClick={() => navigate("/profile")}
                >
                  Your Profile
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate("/")}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            )}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="py-6">
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {movies.map((movie) => (
                <MovieCard
                  movie={movie}
                  key={movie.id}
                  fetchMovies={fetchMovies}
                  isLoggedIn={isLoggedIn}
                />
              ))}
            </div>
          </div>
          {showMovieForm && (
            <AddMovieForm
              showMovieForm={showMovieForm}
              setShowMovieForm={setShowMovieForm}
              fetchMovies={fetchMovies}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Movies;
