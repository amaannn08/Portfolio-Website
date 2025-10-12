import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-center bg-gray-100 h-screen'>
        <div className='flex flex-col w-[45%] mt-[10%] ml-[5%]'>
            <h1 className='text-5xl font-mono ml-1'>Hey, I'm Aman</h1>
            <h2 className='text-2xl font-mono text-gray-500 ml-1 mt-1'>Software Developer</h2>
            <a href="https://x.com/Amaannn08">
                <div className='group flex flex-row bg-white p-3 rounded-xl   items-center justify-between gap-5 mt-6 hover:shadow-[0_8px_10px_-6px_rgba(0,0,0,0.2)] cursor-pointer w-full'>
                <div className='flex gap-2'>
                    <img className='h-4' src="./images/twitter.svg" alt="logo :)" />
                    <h2 className='text-sm font-sans'>Connect with me on <b>X</b> for Software Engineering Insights & More</h2>
                </div>
                <div className='bg-black text-white rounded-full text-sm px-3 py-1 font-mono group-hover:scale-105 group-hover:shadow-md transition-all duration-600'>
                    Follow
                </div>
            </div>
            </a>
            <p className='text-md font-mono ml-1 mt-6'>I turn fuzzy ideas into Exciting Products <i>(quickly)</i> as a Full Stack Developer</p>
            <p className='text-md font-mono ml-1 mt-4'>You can talk to me about competitive programming, new ideas, Development, life, or anything else. <br /> Say Hi on <a href="https://x.com/Amaannn08"><b>X</b></a></p>
            <div className='flex flex-row gap-6 mt-4'>
                <a href="" >
                    <div className='mt-2 flex flex-row items-center justify-evenly rounded-md bg-black w-24 px-2 py-1 hover:scale-105 transition-all duration-200 hover:shadow-md'>
                        <h1 className='text-white text-md font-mono '>Contact</h1>
                    </div>
                </a>
                <a href="">
                    <div className='mt-2 flex flex-row items-center justify-evenly rounded-md bg-black w-24 px-2 py-1 hover:scale-105 transition-all duration-200 hover:shadow-md'>
                        <img src="./images/email.png" className='h-5' alt="email:)" />
                        <h1 className='text-white text-md font-mono'>Email</h1>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Home