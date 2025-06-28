import React from 'react'
import SlidingImages from './SlidingImages'
import ishani from '../../assets/ishani.png'

const Home = () => {
    return (
        <section id='home' className='h-[90vh] overflow-hidden relative'>
            <div className='h-1/2 flex items-end overflow-hidden'>
                <SlidingImages />
            </div>
            <div className='h-1/2 px-8 bg-[#1b263b] text-[#e0e1dd] text-9xl flex items-center justify-between font-bold'>
                <p>ISHANI</p>
                <p>MAURYA</p>
            </div>
            <div className='h-[85vh] w-[30vw] z-[100] absolute right-[37%] bottom-0 brightness-125'>
                <img src={ishani} className='w-full h-full' />
            </div>
        </section>
    )
}

export default Home