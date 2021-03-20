import React from 'react';
import Navbar from '../../components/Navbar/index';
import HomeCards from '../../components/HomeCards/index';
import mockData from '../../youtube-videos-mock';

function HomePage() {

  return (
    <>
      <Navbar/>
      <HomeCards panico={mockData}/>
    </>
  );
}

export default HomePage;