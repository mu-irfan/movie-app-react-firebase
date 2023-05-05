import React from "react";
// import { auth, googleProvider } from "../config/firebase";
// import { signInWithPopup } from "firebase/auth";
// import { useNavigate } from 'react-router'
import SignupForm from "../components/Signup/SignupForm";
import { NavLink } from "react-router-dom";

const Signup = ({setIsLoggedIn}) => {
  //   const navigate = useNavigate()

  //   const googleLoginHandler = async () => {
  //     try {
  //       await signInWithPopup(auth, googleProvider);
  //       navigate('/dashboard')
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
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
          <label className="mr-1">Continue with</label>
          <button
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
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
        </div>
        <SignupForm setIsLoggedIn={setIsLoggedIn} />
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already have an account?
          <NavLink
            to="/"
            className="text-red-600 pl-1 hover:underline hover:underline-offset-4"
          >
            Login
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Signup;
