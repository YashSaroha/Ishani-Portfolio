import React from 'react'
import Card from './Card'
import image from '../../assets/pic1.jpg'
import { GiStarShuriken } from "react-icons/gi";

const About = () => {
    return (
        <section id='about' className='h-screen w-full p-14 flex'>
            <div className='w-[35%] h-full px-3 pr-6'>
                <h2 className='text-4xl font-bold mb-3'>About Me</h2>
                <p>I'm an architect and designer driven by a passion for creating meaningful spaces that blend aesthetics with functionality. With a deep curiosity for cultures and environments, I often draw inspiration from my travels to inform my creative work.</p>
                <p className='mt-4'>Whether it's urban planning, interior design, or conceptual architecture, I believe every project tells a story. My approach is collaborative, intentional, and rooted in thoughtful design. Ready to start your next project?</p>
                {/* <img src="" alt="" /> */}
            </div>

            <div className='w-[30%] mx-3'>
                <Card />
            </div>

            <div className='w-[35%] px-12'>
                <div className='h-[40%]'>
                    <div className='h-[70%] flex items-center justify-center'>
                        <img src={image} alt="" className='rounded-lg object-cover h-full w-1/2 shadow-2xl shadow-[#1b263b]' />
                    </div>
                </div>
                <div className='flex flex-col gap-4 mt-12'>
                    <div className='flex gap-2'>
                        <span className='h-[30px] w-[90px] flex items-center justify-center text-[#e0e1dd] bg-[#1b263b] rounded-full mt-1'>
                            <GiStarShuriken />
                        </span>
                        <p>Over 3+ years of experience in architectural design, interior planning, and creative direction — with a love for travel, photography, and spatial storytelling.</p>
                    </div>
                    <div className='flex gap-2'>
                        <span className='h-[30px] w-[90px] flex items-center justify-center text-[#e0e1dd] bg-[#1b263b] rounded-full mt-1'>
                            <GiStarShuriken />
                        </span>
                        <p>Worked with residential, commercial, and public-sector clients across India, including boutique hotels, cafes, co-working spaces, and eco-design projects.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About