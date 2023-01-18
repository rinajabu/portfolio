import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
        
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img 
            initial={{
                x: -200,
                opacity: 0
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{
                x: 0,
                opacity: 1
            }}
            viewport={{
                once: true
            }}
            src='about.png'
            className='mb-[-130px] md:mb-0 flex-shrink rounded-full object-cover md:rounded-lg w-48 h-48 md:w-96 md:h-96 xl:w-[550px] xl:h-[500px]'
        />
        <div className='space-y-3 md:space-y-5 md:px-10'>
            <h4 className='text-2xl md:text-4xl font-semibold'><span className='underline decoration-[#003abf]/50'>Background</span> on me:</h4>
            <p className='text-sm md:text-lg'>
                I am driven by love for my family and close friends. I see challenges through a growth mindset lens and believe my abilities can always be developed through hard work and dedication. With the problem solving skills I&apos;ve learned in my past experience in the medical coding world and current software engineering experience, I&apos;m determined to use my fluencies in various programming technologies to help establish a more efficient and accessible world.
            </p>
        </div>
    </motion.div>
  )
}

export default About