import React from 'react'
import RoundedImageWithOrnaments from '../myui/ImageOrnaments'
import Image from 'next/image'

const Zdjecie = () => {
  return (
    <div className='bg-green-300 h-[70vh] hover:rounded-2xl duration-1000'>
        <RoundedImageWithOrnaments
            src="/fb.jpg"
            alt="Description of the image"
            width={200}
            height={200} 
        />

        
    </div>
  )
}

export default Zdjecie