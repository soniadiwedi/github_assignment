import React from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiFillGithub} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import {IoIosArrowForward} from 'react-icons/io'
import {AiOutlinePlus} from 'react-icons/ai'
import {GoGitPullRequest} from 'react-icons/go'
import {LiaDotCircle} from 'react-icons/lia'
import {AiOutlineInbox} from 'react-icons/ai'
import {MdOutlineArrowDropDown} from 'react-icons/md'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-4 py-3 bg-[#F6F8FA]'>
        <div className='flex items-center gap-4'>
            <span className=' p-[0.3rem] rounded-sm border-[1px] border-gray-300'>
            <RxHamburgerMenu  />
            </span>
            <AiFillGithub className='text-4xl' />
            <span className='text-sm font-semibold'>Dashboard</span>
        </div>
        <div>
            <div className='flex items-center gap-4'>
                <div className='flex items-center border-[1px] gap-3 py-1 px-2 rounded-md'>
                <span><BiSearch/></span>
                <input type="text" placeholder='Type [/] to search' className=' text-sm border-none outline-none pr-5 bg-[#F6F8FA]' />
                <div className='border-l-[1px] border-gray-600 '></div>
                <span className='flex items-center'><IoIosArrowForward/>_</span>
                </div>
                <div className='border-t border-gray-300'></div>
            <span className='flex items-center gap-2 p-[0.3rem] rounded-sm border-[1px] border-gray-300'>
            <AiOutlinePlus/>
            <MdOutlineArrowDropDown/>
                </span>
            <span className=' p-[0.3rem] rounded-sm border-[1px] border-gray-300'>
                <LiaDotCircle/>
                </span>
            <span className=' p-[0.3rem] rounded-sm border-[1px] border-gray-300'>
                <GoGitPullRequest/>
                </span>
            <span className=' p-[0.3rem] rounded-sm border-[1px] border-gray-300'>
                <AiOutlineInbox/>
                </span>
                <img className='w-8 h-8 rounded-full object-center' src="https://avatars.githubusercontent.com/u/112754761?s=400&u=29e461b5ce06ce97e95d9a04bf073faf1738b9f8&v=4" alt="sonia image" />
            </div>
        </div>
    </div>
  )
}

export default Navbar