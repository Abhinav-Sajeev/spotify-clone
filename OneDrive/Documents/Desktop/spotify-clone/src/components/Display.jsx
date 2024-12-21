import React from 'react'
import DisplayHome from './DisplayHome'

const Display = () => {
  return (
    <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-autollg:w-[75%] lg:ml-0'>
      <Routes>
        <Routes path='/' element={<DisplayHome/>}></Routes>
      </Routes>
    </div>
  )
}

export default Display
