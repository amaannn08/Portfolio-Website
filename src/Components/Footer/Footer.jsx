import React from 'react'
import Clock from './Clock'

const Footer = () => {
  return (
    <div className='flex felx-row justify-between px-4 pt-6 border-t border-t-black'>
        <a className='font-mono text-md' href="https://x.com/Amaannn08">Reach Out!</a>    
        <div className='flex flex-row items-center gap-1'>
            <h1 className='font-mono text-md'>Made by Aman Gupta |</h1>
            <img src="./images/copyright.png" className='h-3' alt="" />
            <h1>2025</h1>
        </div>
        <Clock></Clock>
    </div>
  )
}

export default Footer