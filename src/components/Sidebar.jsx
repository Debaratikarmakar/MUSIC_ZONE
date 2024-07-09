import React from 'react'
import {assets} from'../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

  const navigate = useNavigate();

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#b9069a] h-[15%] rounded flex flex-col justify-around'>
            <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='e-6' src={assets.home_icon} alt="" />
                <p className='font-bold'>Home</p>
            </div>

            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='e-6' src={assets.search_icon} alt="" />
                <p className='font-bold'>Search</p>
            </div>
        </div>

        <div className='bg-[#2c0a5d] h-[85%] rounded'>
          <div className='p-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <img className='w-8' src={assets.stack_icon} alt="" />
              <p className='font-semibold'>Your Library</p>
            </div>

            <div className='flex item-center gap-3'>
              <img className='w-5' src={assets.arrow_icon} alt="" />
              <img className='w-5' src={assets.plus_icon} alt="" />
            </div>
          </div>

          <div className='p-4 bg-[#e0224e] m-2 rounded font-semibold flex-col item-start judtify-start gap-1 pl-4'>
            <h1>Crete your first playlist</h1>
            <p className='font-light'>it's easy we will help you</p>
            <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button> 
          </div>
          <div className='p-4 bg-[#0a8f30] m-2 rounded font-semibold flex-col item-start judtify-start gap-1 pl-4 mt-4'>
            <h1>Let find some podcasts to follow</h1>
            <p className='font-light'>we'll keep you update  on new episodes</p>
            <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 '>Browse Podcast</button> 
          </div>

          <div className='p-6 bg-[#d9bd09] m-2 rounded font-semibold flex-col item-start judtify-start gap-1 pl-4 mt-4'>
            <h1>Let find some podcasts to follow</h1>
            {/*<button className='px-4 py-4 bg-white text-[15px] text-black rounded-full mt-2 '>Let's Go</button>*/}
            <img onClick={()=>navigate(-1)} className='w-8 bg-[#e0224e] p-2 rounded-2xl cursor-pointer mt-2' src={assets.arrow_right}  alt="" /> 
          </div>

        </div>
    </div>
  )
}

export default Sidebar