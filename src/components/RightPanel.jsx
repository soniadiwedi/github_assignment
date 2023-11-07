import React from 'react'
import {BiFilter} from 'react-icons/bi'
import { repo, start } from '../utills/data'
import RepoCards from './RepoCards'
import StarRepos from './StarRepos'
const RightPanel = () => {
  return (
    <div className='p-6 '>
    <div className='flex gap-6'>
    <div className='w-[50vw]'> 
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-lg font-semibold'>Home</h1>
        <div className='flex items-center gap-3'>
          <p className='text-xs text-blue-600'>Send feedback</p>
          <p className='flex bg-gray-50 text-sm font-semibold px-2 py-1 border-[1px] border-gray-300 rounded-lg items-center gap-2'>
            <BiFilter/>
            Filter
            <span className='w-4 h-4 flex text-xs items-center justify-center rounded-full bg-gray-300'>8</span>
          </p>
        </div>
      </div>
     </div>
     <div>
      <div className='py-2 flex flex-col gap-3'>
        {
          repo.map((el,i)=>{
            return <RepoCards key={i} {...el} />
          })
        }
      </div>
     </div>
     </div>
     <div className='py-3 w-[22vw]'>
        <div className='border-[1px] border-gray-300 p-4 rounded-lg'>
          <h1 className='text-sm font-semibold'>Explore repository</h1>
          <div className='py-2 flex flex-col gap-4'>
            {
              start.map((el,i)=>{
                return <StarRepos key={i} {...el} />
              })
            }
          </div>
        </div>
     </div>
    </div>
    </div>
  )
}

export default RightPanel