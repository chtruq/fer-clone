import React from 'react'

const Navigation = () => {
  return (
    <div className='bg-slate-500 text-white '>
        <nav>
                <ul className='flex flex-row justify-start'>
                    <li className='px-8 hover:bg-yellow-700 py-4'><a className='active' href='#home'>Home</a></li>
                    <li className='px-8 hover:bg-yellow-700 py-4'><a href='#news'>News</a></li>
                    <li className='px-8 hover:bg-yellow-700 py-4'><a href='#about'>About</a></li>
                    <li className='px-8 hover:bg-yellow-700 py-4'><a href='#contact'>Contact</a></li>
                </ul>
            </nav>
        </div>
  )
}

export default Navigation
