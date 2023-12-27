import React from 'react'

const Servicecard = ({image, title}) => {
  return (
    <div className='w-full p-20 bg-white rounded-3xl'>
        <div className='w-28 h-28 rounded-full mx-auto relative bg-[#f3e4f0]'>
            <div className='w-20 h-20 rounded-full absolute top-[14%] left-[14%] bg-[#eed3e7]'>
                {image}
            </div>
        </div>

        <div className='text-center mt-6 w-[100%]'>
            <h1 className='text-3xl font-semibold'>{title}</h1>
            <p className='text-lg mt-3'>Savor freshness in every bite.</p>
        </div>
    </div>
  )
}

export default Servicecard