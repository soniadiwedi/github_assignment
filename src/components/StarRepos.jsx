import React from 'react'
import {AiOutlineStar} from 'react-icons/ai'

const StarRepos = ({name,image,desc,star,lang}) => {
  return (
    <div className='border-b-[1px] border-gray-300 flex flex-col gap-3 py-6'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2 '>
                <img src={image} className='w-4 h-4 rounded-full' alt="" />
                <p className='text-xs font-semibold'>{name}</p>
            </div>
            <div className='border-[1px] border-gray-300 py-1 px-2 bg-gray-50 rounded-sm'>
                <AiOutlineStar/>
            </div>
        </div>
        <p className='text-xs'>{desc}</p>
        <div className='flex items-center gap-10'>
        <span className='text-xs flex items-center gap-1'><AiOutlineStar/> {star}</span>
            <span className='text-xs flex items-center gap-1'><div className='w-2 h-2  rounded-full bg-yellow-300'> </div> {lang}</span>
        </div>
        
    </div>
  )
}

export default StarRepos