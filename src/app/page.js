import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import React from 'react';

function Home() {
  return (
    <div className='w-full h-screen bg-indigo-300'>
      <Navbar/>
      <Card/>
    </div>
  )
}

export default Home;