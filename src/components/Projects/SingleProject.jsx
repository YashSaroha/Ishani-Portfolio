import React from 'react'

export default function SingleProject({ index, title, description, manageModal }) {

    return (
        <div
            onMouseEnter={(e) => { manageModal(true, index, e.clientX, e.clientY) }}
            onMouseLeave={(e) => { manageModal(false, index, e.clientX, e.clientY) }}
            className="w-full flex items-center justify-between py-[40px] px-[100px] cursor-pointer transition-all duration-200 border-y text-[#e0e1dd] border-gray-300 group [&:nth-child(2)]:text-white [&:nth-child(2)]:bg-zinc-900"
        // className="w-full flex items-center justify-between py-[40px] px-[100px] cursor-pointer transition-all duration-500 border-y border-gray-300 group hover:bg-zinc-900 hover:text-white"
        >
            <h2 className='text-[35px] m-0 font-normal transition-all duration-300 group-hover:translate-x-[-10px]'>{title}</h2>
            <p className='font-normal transition-all duration-300 group-hover:translate-x-3 w-1/4 text-end'>{description}</p>
        </div>
    )
}
