import React from 'react'
import {GoRepo} from 'react-icons/go'
import { data } from '../utills/data'
import { MdOutlineArrowDropDown } from 'react-icons/md'

const LeftSide = () => {
  return (
    <div className='px-4 w-[20vw] py-5 border-r-[1px] min-h-full max-h-screen border-gray-300'>
      
      <div className='py-4'>
        <span className='flex items-center gap-2'>
        <img className='w-4 h-4 rounded-full object-center' src="https://avatars.githubusercontent.com/u/112754761?s=400&u=29e461b5ce06ce97e95d9a04bf073faf1738b9f8&v=4" alt="" />
        <span className='flex items-center text-sm font-bold'>soniadiwedi 
            <MdOutlineArrowDropDown/>
        </span>
        </span>
      </div>
      <div className='pt-4 flex flex-col gap-2'>
        <div className='flex items-center justify-between'>
          <span className='text-sm font-semibold'>Top Repositories</span>
          <button className='text-xs flex items-center gap-1 bg-[#1F883D] text-white py-1 px-2 font-bold rounded-md' ><GoRepo className=' font-bold ' /><span>New</span></button>
        </div>
       <div>
       <input type="text" placeholder='Find a repository...' className=' border-[1px] rounded-md text-xs py-2 px-2 w-full' />
       </div>
      </div>
      <div className='flex flex-col gap-1 py-2'>
        {
          data.map((el)=>{
            return  <div className='flex items-center gap-2'>
                <img className='w-4  h-4 rounded-full object-center' src={el.image} alt="" />
                <p className='text-sm text-gray-500'>{el.name}</p>
                </div>
          })
        }
      </div>
      <div><span className='text-xs text-gray-600'>see more</span></div>
      <div className='py-4 flex flex-col gap-2'>
        <h1 className='text-sm font-semibold text-gray-700'>Recent activity</h1>
        <p className='p-3 text-xs border-[1px] border-gray-300 rounded-md'>When you take actions across GitHub, we’ll provide links to that activity here.</p>
      </div>
      <div className='pt-4 flex flex-col gap-2'>
        <div className='flex items-center justify-between'>
          <span className='text-sm font-semibold'>Your teams</span>
         
        </div>
       <div>
       <input type="text" placeholder='Find your team' className=' border-[1px] rounded-md text-xs py-2 px-2 w-full' />
       </div>
      </div>
    </div>
  )
}

export default LeftSide