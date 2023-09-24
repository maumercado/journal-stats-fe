import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './auth/AuthContext';

const Header = () => {
  const { userProfile, logout } = useAuth();

  return (
    <header>
      <nav>
        <Link to="/">
          Trader Journal
        </Link>
        <ul>
          {userProfile ? (
            <li className="relative">
              <button>
                {userProfile.email}
              </button>
              <ul>
                <li>
                  <Link
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logout}
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
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
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
