import { useState, useEffect, useRef } from 'react';
import SingleProject from './SingleProject';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const projects = [
  {
    title: "Coffee Island, Gurgaon",
    description: "Brought life to a café wall in Gurgaon with a hand-painted mural that sparked curiosity, conversation, and increased customer visits.",
    src: "pic1.jpg",
    color: "#e0e1dd",
    link: "https://yash-cartcraft.vercel.app/"
  },
  {
    title: "PROJECT 2",
    description: "Sample description of the project done along with brief details",
    src: "pic3.jpg",
    color: "#778da9",
    link: "https://yash-cartcraft.vercel.app/"
  },
  {
    title: "PROJECT 3",
    description: "Sample description of the project done along with brief details",
    src: "pic4.jpg",
    color: "#415a77",
    link: "https://yash-cartcraft.vercel.app/"
  },
  {
    title: "PROJECT 4",
    description: "Sample description of the project done along with brief details",
    src: "pic5.jpg",
    color: "#e0e1dd",
    link: "https://yash-cartcraft.vercel.app/"
  }
]

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
}

export default function Projects() {

  const [modal, setModal] = useState({ active: false, index: 0 })
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" })
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" })
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" })
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" })
  }, [])

  const moveItems = (x, y) => {
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }
  const manageModal = (active, index, x, y) => {
    moveItems(x, y)
    setModal({ active, index })
  }

  return (
    <section
      id='projects'
      onMouseMove={(e) => { moveItems(e.clientX, e.clientY) }}
      className="flex flex-col items-start pt-[70px] pb-[70px] bg-[#1b263b] rounded-[50px] m-6 mb-20"
    >
      <h1 className='mb-[30px] text-[#e0e1dd] w-full text-center text-4xl font-bold'>Recent Work</h1>
      <div className="w-full max-w-[1400px] flex flex-col items-center justify-center mb-[70px]">
        {
          projects.map((project, index) => {
            return <SingleProject index={index} title={project.title} description={project.description} manageModal={manageModal} key={index} />
          })
        }
      </div>
      <div className='mx-auto'>
        <button className='bg-[#e0e1dd] px-6 py-3 rounded-full font-semibold cursor-pointer text-2xl hover:scale-[1.05] duration-300'>
          More Work
        </button>
      </div>

      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className="h-[250px] w-[350px] rounded-lg fixed top-[50%] left-[50%] bg-white overflow-hidden z-[3] pointer-events-none"
        >
          <div
            style={{ top: index * -100 + "%", transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)' }}
            className="h-full w-full relative transition-top duration-500"
          >
            {
              projects.map((project, index) => {
                const { src, color, link } = project
                return (
                  <div
                    className="h-full w-full flex items-center justify-center"
                    style={{ backgroundColor: color }}
                    key={`modal_${index}`}
                  >
                    <img src={`/src/assets/${src}`} width={300} height={0} alt="image" className='h-auto' />
                  </div>
                )
              })
            }
          </div>
        </motion.div>

        <motion.div
          ref={cursor}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className='h-[80px] w-[80px] rounded-full text-white fixed z-[3] flex items-center justify-center text-[14px] font-light pointer-events-none bg-primary'
        >
        </motion.div>

        <motion.div
          ref={cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className='h-[80px] w-[80px] rounded-full text-white fixed z-[3] flex items-center justify-center text-[14px] font-light pointer-events-none bg-[#1b263b]'
        >
          View
        </motion.div>

      </>
    </section>
  )
}
