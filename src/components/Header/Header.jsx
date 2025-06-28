import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { RiPaintBrushLine } from "react-icons/ri";
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
    return (
        <header className='w-full h-[10vh] flex justify-between items-center px-8'>
            <ul className='w-1/3 h-full flex gap-2 items-center font-semibold'>
                <li><a href="#about" className="hover:bg-[#1b263b] hover:text-[#e0e1dd] p-2 rounded-full duration-150">About</a></li>
                <span>/</span>
                <li><a href="#projects" className="hover:bg-[#1b263b] hover:text-[#e0e1dd] p-2 rounded-full duration-150">Projects</a></li>
                <span>/</span>
                <li><a href="#services" className="hover:bg-[#1b263b] hover:text-[#e0e1dd] p-2 rounded-full duration-150">Services</a></li>
                <span>/</span>
                <li><a href="#contact" className="hover:bg-[#1b263b] hover:text-[#e0e1dd] p-2 rounded-full duration-150">Contact</a></li>
            </ul>

            <div className='w-1/3 h-full flex flex-col items-center justify-center'>
                <div className="upperText flex gap-2 items-center font-artistic">
                    <div className='text-2xl'>ISHANI</div>
                    <span className='flex items-center text-2xl text-[#415a77]'> [ <RiPaintBrushLine className='text-lg' /> ] </span>
                    <div className='text-2xl'>MAURYA</div>
                </div>
                <TypeAnimation
                    sequence={[
                        'ARCHITECT',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'DESIGNER',
                        1000,
                        'PLANNER',
                        1000,
                        'TRAVELER',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontWeight: 600 }}
                    repeat={Infinity}
                />
            </div>

            <div className='w-1/3 h-full flex gap-3 items-center justify-end'>
                <a href="#contact">
                    <button className='flex items-center [word-spacing:4px] font-bold bg-[#1b263b] text-white py-3 px-5 rounded-full cursor-pointer wordsp'>
                        GET IN TOUCH
                        <span className='text-2xl pl-2'><MdArrowOutward /></span>
                    </button>
                </a>
            </div>
        </header>
    )
}

export default Header