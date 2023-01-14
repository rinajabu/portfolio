import React from 'react'
import { motion } from 'framer-motion'

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
            className='mb-[-120px] md:mb-0 flex-shrink w-60 h-60 rounded-full object-cover md:rounded-lg md:w-96 md:h-96 xl:w-[550px] xl:h-[500px]'
        />
        <div className='space-y-5 md:px-10'>
            <h4 className='text-2xl font-semibold'><span className='underline decoration-[#003abf]/50'>Background</span> on me:</h4>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur repellendus hic dolore doloremque molestias, iste delectus, nihil maxime sapiente nemo temporibus ullam quidem eius est illum culpa fuga at vero magnam ratione nesciunt. Perspiciatis ipsa corrupti obcaecati ipsam aperiam molestias atque voluptate dolor illum quibusdam veritatis, velit, et reiciendis!</p>
        </div>
    </motion.div>
  )
}

export default About