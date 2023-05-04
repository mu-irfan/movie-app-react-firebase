import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from 'react-router'


const LoginForm = () => {
  //
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()


  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/movies')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={(e) => setEmail(e.target.value)}
        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
        type="text"
        placeholder="Email Address"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
        type="password"
        placeholder="Password"
      />
      <div className="mt-4 flex justify-between font-semibold text-sm">
       
        <a
          className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
          href="/forgot-password"
        >
          Forgot Password?
        </a>
      </div>
      <div className="text-center md:text-left">
        <button
          className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
