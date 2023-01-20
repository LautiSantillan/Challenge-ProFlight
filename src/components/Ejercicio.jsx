import { React, useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import icono from '../assets/Icono.png'

const Ejercicio = () => {

  const [currentImage, setCurrentImage] = useState(0)

  const handleNext = (event) => {
    event.preventDefault()
    const lastImage = currentImage === 3
    const newImage = lastImage ? 0 : currentImage + 1
    setCurrentImage(newImage)
  }

  const handlePrev = (event) => {
    event.preventDefault()
    const firstImage = currentImage === 0
    const newImage = firstImage ? 3 : currentImage - 1
    setCurrentImage(newImage)
  }

  return (
    <div className='w-full h-screen bg-gray-900 text-white flex justify-center items-center gap-10'>
      <div>
        <button onClick={handlePrev}><HiArrowNarrowLeft size={40}></HiArrowNarrowLeft></button>
      </div>
      <div className={currentImage === 0 ? 'bg-blue-500 w-36 h-36 flex justify-center items-center' : 'bg-gray-300 w-36 h-36 flex justify-center items-center'} >
        <img src={icono} alt="" width={'100px'} height='100px' />
      </div>
      <div className={currentImage === 1 ? 'bg-blue-500 w-36 h-36 flex justify-center items-center' : 'bg-gray-300 w-36 h-36 flex justify-center items-center'} >
        <img src={icono} alt="" width={'100px'} height='100px' />
      </div>
      <div className={currentImage === 2 ? 'bg-blue-500 w-36 h-36 flex justify-center items-center' : 'bg-gray-300 w-36 h-36 flex justify-center items-center'} >
        <img src={icono} alt="" width={'100px'} height='100px' />
      </div>
      <div className={currentImage === 3 ? 'bg-blue-500 w-36 h-36 flex justify-center items-center' : 'bg-gray-300 w-36 h-36 flex justify-center items-center'} >
        <img src={icono} alt="" width={'100px'} height='100px' />
      </div>
      <div>
        <button onClick={handleNext}><HiArrowNarrowRight size={40}></HiArrowNarrowRight></button>
      </div>
    </div>
  )
}

export default Ejercicio