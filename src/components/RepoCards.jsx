import React from 'react'
import {BsThreeDots} from 'react-icons/bs'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import {AiOutlineStar} from 'react-icons/ai'
const RepoCards = ({name,image,time,by}) => {
  return (
    <div className='p-4 border-[1px] border-gray-300 rounded-lg'>
      <div className='flex items-center justify-between'>
       <div className='flex items-center gap-2'>
       <img className='w-8 h-8 rounded-full' src={image} alt="" />
        <div className=' text-xs text-gray-500'>
          <span><span className='text-black text-sm font-semibold'>{name}</span> created a repository</span>
          <p>{time}</p>
        </div>
       </div>
       <div><BsThreeDots/></div>
      </div>
      <div>
        <div className=' bg-[#F6F8FA] p-4 my-2 rounded-md'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <img src={by.image} className='w-4 h-4 rounded-full' alt="" />
              <h1 className='text-xs font-semibold '>{by.name}</h1>
            </div>
            <div>
              <div className='flex items-center'>
                <span className=' border-[1px] rounded-tl-md rounded-bl-md py-1 px-2 border-gray-300 text-xs flex items-center gap-3'>
                <AiOutlineStar className='text-sm' />
                Start
                </span>
                <span className='border-[1px] border-l-[0px] rounded-tr-md rounded-br-md py-1 px-2 border-gray-300'> <MdOutlineArrowDropDown/></span>
              </div>
            </div>
          </div>
              <div className='p-3 flex items-center gap-2'>
                <div className='w-2 h-2  rounded-full bg-yellow-300'> </div>
                <span className='text-xs' >{by.lang}</span>
              </div>
        </div>
      </div>
    </div>
  )

}

export default RepoCards