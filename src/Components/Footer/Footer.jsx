import React from 'react'
import Clock from './Clock'

const Footer = () => {
  return (
    <div className='flex felx-row justify-between px-4 pt-6 border-t border-t-black'>
        <a className='font-mono text-md' href="https://x.com/Amaannn08">Reach Out!</a>    
        <h1 className='font-mono text-md'>Made by Aman Gupta | 2025</h1>
        <Clock></Clock>
    </div>
  )
}

export default Footer