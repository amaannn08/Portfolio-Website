import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-center bg-gray-50 h-screen'>
        <div className='flex flex-col '>
            <h1 className='text-4xl font-mono'>Hey, I'm Aman</h1>
            <h2 className='text-2xl font-mono text-gray-500'>Software Developer</h2>
            <div className='flex bg-white '>
                <img className='h-4' src="./images/twitter.svg" alt="logo :)" />
            </div>
        </div>
    </div>
  )
}

export default Home