import React from 'react'

const Search = () => {
  return (
    <div className='mt-[20rem]  md:mt-[60rem] mb-8 w-[60%] h-12 md:h-30 border flex justify-between rounded-full px-5 mx-auto'>
        <input type='text' className='w-full text-xl' placeholder='What food would you like to eat?' />
        {/* if mobile view, display search icon */}
        <button className='px-16 my-6 py-4 bg-[#2c5ebe] text-white rounded-full'>Search</button>
    </div>
  )
}

export default Search