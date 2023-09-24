import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/auth/AuthContext';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signup(firstName, lastName, email, password, phoneNumber);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <div className="bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-4 text-white">Signup</h1>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <span className="text-white">First Name:</span>
            <input
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
              className="block w-full rounded-lg py-2 px-4 bg-fuchsia-800 text-white"
            />
          </label>
          <label className="block mb-4">
            <span className="text-white">Last Name:</span>
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
              className="block w-full rounded-lg py-2 px-4 bg-fuchsia-800 text-white"
            />
          </label>
          <label className="block mb-4">
            <span className="text-white">Email:</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="block w-full rounded-lg py-2 px-4 bg-fuchsia-800 text-white"
            />
          </label>
          <label className="block mb-4">
            <span className="text-white">Password:</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="block w-full rounded-lg py-2 px-4 bg-fuchsia-800 text-white"
            />
          </label>
          <label className="block mb-4">
            <span className="text-white">Phone Number:</span>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              required
              className="block w-full rounded-lg py-2 px-4 bg-fuchsia-800 text-white"
            />
          </label>
          <button type="submit" className="bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-bold py-2 px-4 rounded">
            Signup
          </button>
        </form>
        <p className="text-white mt-4 text-center">
          Already have an account? <a href="/login" className="underline">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
