import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as DataTrendsLogo } from '../assets/svgs/undraw_data_trends.svg';

const Home = () => {
  return (
    <div>
      <div>
        <DataTrendsLogo style={{ width: '300%', height: '300%' }} />
      </div>
      <div>
        <h1>Welcome to your trading journal!</h1>
        <p>
          Journaling your trades is an essential part of improving your trading performance.<br />
          With our powerful statistical gathering tools and intuitive graphics, you can gain valuable insights into your trading habits.
        </p>
        <Link to="/login">
          Log In
        </Link>
        <p>
          Don't have an account? <Link to="/signup">Sign up here</Link>.
        </p>
      </div>
    </div>
  );
};

export default Home;
