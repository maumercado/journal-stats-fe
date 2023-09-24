import React, { useState, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthContext';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';


function App() {
  const [cssLoaded, setCssLoaded] = useState(false);

  useLayoutEffect(() => {
    const link = document.createElement('link');
    link.href = './styles.css';
    link.rel = 'stylesheet';
    link.onload = () => {
      setCssLoaded(true);
    };
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="App">
      {cssLoaded && (
        <AuthProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Router>
        </AuthProvider>
      )}
    </div>
  );
}

export default App;
