import React from 'react'
import './globals.css'

const notfound = () => {
  return (
      <main className='text-center text-darkblue my-32'>
          <h2 className=' font-bold text-3xl my-2 sm:text-xl'>Whoops, there was a problem!</h2>
          <p className='text-sm opacity-60 sm:text-xs'>We cannot seem to find the page you were looking for.</p>

          <button className="my-16 bg-primary text-white hover:bg-white hover:text-primary hover:border hover:border-primary px-5 py-3 rounded-xl sm:text-sm sm:px-3 sm:py-2 sm:my-8">
                <a href="/">Back to Homepage</a>
        </button>
    </main>
  )
}

export default notfound