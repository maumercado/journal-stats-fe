import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/auth/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <div className="bg-purple-900 rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-4 text-white">Login</h1>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <span className="text-white">Email:</span>
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="block w-full rounded-lg py-2 px-4 bg-purple-800 text-white"
            />
          </label>
          <label className="block mb-4">
            <span className="text-white">Password:</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="block w-full rounded-lg py-2 px-4 bg-purple-800 text-white"
            />
          </label>
          <button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </form>
        <p className="text-white mt-4 text-center">
          Don't have an account? <a href="/signup" className="underline">Create a new one</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
