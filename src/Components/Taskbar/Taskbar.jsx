import React from 'react'
import { ReactTyped } from "react-typed";
import Profile from './mini components/profile';
import Pages from './mini components/pages';

const Taskbar = () => {
  return (
    <>
      <div className='flex flex-col p-3 bg-slate-400 h-screen'>
        <div className='py-10 px-2'>
          <Profile></Profile>
        </div>
        <div className=''>
          <Pages></Pages>
        </div>
      </div>
    </>
  )
}

export default Taskbar
