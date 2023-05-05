import React, { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { signOut, onAuthStateChanged } from "@firebase/auth";
import { useNavigate } from "react-router";

const Profile = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  console.log(user);
  const logoutHandler = async () => {
    try {
      await signOut(auth);
      navigate("/");
      localStorage.clear();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unSub();
    };
  }, []);

  return (
    <div>
      <div className="bg-white rounded-md px-40 py-12">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full object-cover mr-4"
              src={user.photoURL}
              alt="Profile"
            />
            <div>
              <h1 className="font-bold text-gray-800 text-xl">
                {user.displayName}
              </h1>
              <p className="text-gray-600 text-[12px]">{user.email}</p>
            </div>
          </div>
          <button
            onClick={logoutHandler}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full"
          >
            Logout
          </button>
        </div>
        <div className="border-t border-gray-300 py-4">
          <h2 className="font-bold text-gray-800 mb-2">Your ID:</h2>
          <p className="text-gray-600">
          {user.uid}
          </p>
        </div>
        <div className="border-t border-gray-300 py-4">
          <h2 className="font-bold text-gray-800 mb-2">Movies You Posted</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Thor 2</li>
            <li>Faana</li>
            <li>Jahan</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
