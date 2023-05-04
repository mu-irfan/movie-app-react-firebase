import React, { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../config/firebase";
import { useNavigate } from "react-router";

const SignupForm = () => {
  //
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(username,email, password);
    navigate("/");
    // try {
    //   await createUserWithEmailAndPassword(auth, email, password);
    //   navigate('/movies')
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={(e) => setUsername(e.target.value)}
        className="text-sm w-full px-4 py-2 mb-4 border border-solid border-gray-300 rounded"
        type="text"
        placeholder="username"
      />
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

      <div className="text-center md:text-left">
        <button
          className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
          type="submit"
        >
          Create Account
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
