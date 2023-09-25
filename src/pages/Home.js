import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as DashBoardLogo } from '../assets/svgs/undraw_dashboard.svg';

const Home = () => {
  return (

    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div className="relative ml-4" style={{ marginTop: '100px' }} >
          <DashBoardLogo style={{ width: '100%', height: '100%' }} />
        </div>
        <div>
          <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Start your journal with <span class="text-blue-600">TradeMastery Journal</span></h1>
          <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">Journaling your trades is an essential part of improving your trading performance. With our powerful statistical gathering tools and intuitive graphics, you can gain valuable insights into your trading habits.</p>

          <div class="mt-7 grid gap-3 w-full sm:inline-flex">
            <Link to='/login' className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" href="#">
              Get started
              <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
