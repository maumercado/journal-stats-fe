import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as DataTrendsLogo } from '../assets/svgs/undraw_data_trends.svg';

const Home = () => {
  return (
    <div className="bg-black text-white h-screen flex flex-col justify-center items-center">
      <div className="hero-header w-full h-64 bg-cover bg-center flex justify-center items-center flex-col">
        <DataTrendsLogo style={{ width: '300%', height: '300%' }} />
      </div>
      <div className="container mx-auto my-8 text-center mt-8">
        <h1 className="text-4xl font-bold mb-4 text-purple-500">Welcome to your trading journal!</h1>
        <p className="text-lg mb-8">
          Journaling your trades is an essential part of improving your trading performance.<br />
          With our powerful statistical gathering tools and intuitive graphics, you can gain valuable insights into your trading habits.
        </p>
        <Link to="/login" className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
          Log In
        </Link>
        <p className="text-lg mt-8">
          Don't have an account? <Link to="/signup" className="text-purple-500 font-bold">Sign up here</Link>.
        </p>
      </div>
    </div>
  );
};

export default Home;
