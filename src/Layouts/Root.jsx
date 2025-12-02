import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Root = () => {
  return (
    <div>
      <header className="md:w-9/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <main className='min-h-[calc(100vh-315.71px)]'>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;