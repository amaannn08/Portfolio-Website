import React from 'react'
import { ReactTyped } from "react-typed";
const Profile = () => {
  return (
   <div className=''>
      <div>
        <div className='flex items-center gap-2'>
          <img src="./images/profile.svg" alt="" className='h-10 rounded-full' />
          <div className='flex flex-col'>
            <h1 className='font-mono text-md'>Aman Gupta</h1>
            <ReactTyped
              className='font-sans text-xs'
              strings={[
                "Software Engineer",
                "CP Enthusiast",
                "Problem Solver",
                "Physics Enthusiast",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
              >
            </ReactTyped>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile