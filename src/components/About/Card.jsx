import React from 'react'
import pic from '../../assets/pic2.jpg'
import { BsGlobeAmericas } from "react-icons/bs";


const Card = () => {
    return (
        <div className='bg-white h-full flex flex-col gap-2 justify-start p-5 rounded-lg'>
            <span className='bg-[#e0e1dd] h-16 w-16 rounded-full flex items-center justify-center text-3xl'>
                <BsGlobeAmericas />
            </span>
            <h1 className='text-4xl font-bold'>120%</h1>
            <p>Average increase in client engagement in last 6 months</p>
            <div className='h-[60%] mt-4'>
                <img src={pic} className='object-cover w-full h-full rounded-md' />
            </div>
        </div>
    )
}

export default Card