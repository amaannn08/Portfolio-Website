import React from 'react'

const Pages = () => {
  return (
    <>
        <div className='flex flex-col mx-2 gap-2'>
            <div className='flex flex-row p-2 items-center gap-2 bg-black rounded-md h-8 w-[97%] cursor-pointer hover:bg-gray-300 group  hover:border-black '>
                <p className='text-white font-mono text-md group-hover:text-black '>H</p>
                <h1 className={`text-white font-mono text-md group-hover:text-black `}>Home</h1>
            </div>
            <div className='flex flex-row p-2 items-center gap-2 bg-black rounded-md h-8 w-[97%] cursor-pointer hover:bg-gray-300 group  hover:border-black '>
                <p className='text-white font-mono text-md group-hover:text-black '>E</p>
                <h1 className={`text-white font-mono text-md group-hover:text-black `}>Experience</h1>
            </div>
            <div className='flex flex-row p-2 items-center gap-2 bg-black rounded-md h-8 w-[97%] cursor-pointer hover:bg-gray-300 group  hover:border-black '>
                <p className='text-white font-mono text-md group-hover:text-black '>P</p>
                <h1 className={`text-white font-mono text-md group-hover:text-black `}>Projects</h1>
            </div>
            <div className='flex flex-row p-2 items-center gap-2 bg-black rounded-md h-8 w-[97%] cursor-pointer hover:bg-gray-300 group  hover:border-black '>
                <p className='text-white font-mono text-md group-hover:text-black '>B</p>
                <h1 className={`text-white font-mono text-md group-hover:text-black `}>Blogs</h1>
            </div>
        </div>
    </>
  )
}

export default Pages