import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center min-h-screen '>
        <div className="w-16 h-16 border-4 border-primary-foreground border-t-transparent rounded-full animate-spin"  />
    </div>
  )
}

export default Loader