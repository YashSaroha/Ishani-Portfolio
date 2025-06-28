import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
    return (
        <section id='contact' className='w-full flex flex-col items-center pt-[70px] pb-[30px] bg-[#1b263b] text-[#e0e1dd]'>
            <h1 className='text-3xl font-semibold mb-3'>Got a Vision? Let's Bring It To Life!</h1>
            <p className='w-1/2 text-center'>I am always excited to collaborate on new and innovative projects. Whether you are starting from scratch or refining an existing idea</p>
            <div className='flex gap-6 items-center mt-5'>
                <button className='font-semibold flex items-center gap-2 underline cursor-pointer'>Book A Call
                    <span><MdArrowOutward /></span>
                </button>
                <div className='flex gap-4 justify-end text-xl'>
                    <span><FaInstagram /></span>
                    <span><FaYoutube /></span>
                    <span><FaLinkedinIn /></span>
                </div>
            </div>
        </section>
    )
}

export default Contact