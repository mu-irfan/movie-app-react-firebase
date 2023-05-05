import React from "react";
import LoginForm from "../components/Login/LoginForm";
import { auth, googleProvider, facebookProvider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";
import { Link, NavLink } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const googleLoginHandler = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/movies");
      localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  const facebookLoginHandler = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      navigate("/movies");
      localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <Link to="/movies" className="mr-1 underline text-green-500">Watch Movies</Link>
          <br />
          <br />
          <div className="flex mb-3 items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
              Or Login to Modify Movies 
            </p>
          </div>
          <label className="mr-1">Sign in with</label>
          <button
            onClick={googleLoginHandler}
            type="button"
            className="mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <svg
              className="w-4 h-4 ml-2.5"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
          </button>
          <button
            onClick={facebookLoginHandler}
            type="button"
            class="inline-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </button>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
        </div>
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don't have an account?{" "}
          <NavLink
            to="/create-account"
            className="text-red-600 hover:underline hover:underline-offset-4"
          >
            Register
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Login;
