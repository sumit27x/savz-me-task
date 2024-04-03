import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import React from 'react';

function Home() {
  return (
    <div className='w-full h-screen bg-indigo-300'>
      <div className='mr-10 ml-10'>
      <Navbar/>
      <Card/>
      </div>

    </div>
  )
}

export default Home;