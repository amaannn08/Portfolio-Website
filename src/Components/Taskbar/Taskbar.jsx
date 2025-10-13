import React from 'react'
import { ReactTyped } from "react-typed";
import Profile from './mini components/profile';
import Pages from './mini components/pages';
import College from './mini components/college';

const Taskbar = () => {
  return (
    <>
      <div className='flex flex-col py-3 px-1 h-screen'>
        <div className='pt-10 px-2'>
          <Profile></Profile>
        </div>
        <div className='px-3 pb-8'>
          <College></College>
        </div>
        <div className='w-[100%]'>
          <Pages></Pages>
        </div>
      </div>
    </>
  )
}

export default Taskbar
