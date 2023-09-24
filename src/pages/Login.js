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
    <div>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Email:</span>
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label>
            <span>Password:</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
          <button type="submit">
            Login
          </button>
        </form>
        <p>
          Don't have an account? <a href="/signup">Create a new one</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
