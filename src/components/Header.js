import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './auth/AuthContext';

const Header = () => {
  const { userProfile, logout } = useAuth();

  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <Link to="/" className="text-white text-2xl font-bold">
          Trader Journal
        </Link>
        <ul className="flex items-center">
          {userProfile ? (
            <li className="relative">
              <button className="text-white hover:text-gray-200">
                {userProfile.email}
              </button>
              <ul className="absolute right-0 bg-gray-700 rounded-lg py-2 mt-2">
                <li>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-gray-600"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="text-white hover:text-gray-200 px-4 py-2"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="text-white hover:text-gray-200 px-4 py-2"
                >
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
