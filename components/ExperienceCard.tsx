/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article
        className='flex flex-col rounded-lg items-center space-between space-y-0 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'
    >
        {/* <motion.img 
            initial={{
                y: -100,
                opacity: 0
            }}
            transition={{ duration: 1.2 }}
            whileInView={{  opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[300px] object-cover object-center'
            src="sempre.png" 
            alt="company logo" 
        /> */}

        <motion.div
            initial={{
                y: -100,
                opacity: 0
            }}
            transition={{ duration: 1.2 }}
            whileInView={{  opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='px-0 md:px-10'
        >
            <h4 className='text-3xl md:text-4xl font-light'>Software Engineer</h4>
            <p className='font-bold text-1xl mt-1'>SEMPRE (Secure EMP-Resistant Edge)</p>
            <div className='flex space-x-2 my-2'>
                <img 
                    className='h-8 w-8 rounded-full'
                    src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" 
                    alt="react logo" 
                />
                <img 
                    className='h-8 w-8 rounded-full'
                    src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" 
                    alt="react logo" 
                />
                <img 
                    className='h-8 w-8 rounded-full'
                    src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" 
                    alt="react logo" 
                />
            </div>
            <p className='uppercase py-3 text-gray-300'>October 2021 - present</p>
            <ul className='list-disc space-y-4 ml-5'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, vitae.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, vitae.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, vitae.</li>
            </ul>
        </motion.div>
    </article>
  )
}

export default ExperienceCard