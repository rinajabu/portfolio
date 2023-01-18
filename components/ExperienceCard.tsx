/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    jobTitle: string,
    company: string,
    datesWorked: string,
    techUsed: {
        name: string,
        src: string,
        alt: string
    }[]
    description: string[]
}

const ExperienceCard = ({jobTitle, company, datesWorked, techUsed, description}: Props) => {
    return (
        <article
            className='flex flex-col rounded-lg items-center space-between space-y-0 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'
        >
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.2 }}
                whileInView={{  opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='px-0 md:px-10'
            >
                <h4 className='text-3xl md:text-4xl font-light'>{jobTitle}</h4>
                <p className='font-bold text-1xl mt-1'>{company}</p>
                <div className='flex space-x-2 my-2'>
                    { techUsed.map((tech) => (
                        <img 
                            key={tech.name}
                            className='h-8 w-8 rounded-full'
                            src={tech.src}
                            alt={tech.alt}
                        />
                    ))}
                </div>
                <p className='uppercase py-3 text-gray-300'>{datesWorked}</p>
                <div className='space-y-3 md:space-y-4 px-2 overflow-auto h-52 md:h-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#003abf]/40'>
                    { description.map((item, i) => (
                        <p key={i}>{item}</p>
                    ))}
                </div>
            </motion.div>
        </article>
    )
}

export default ExperienceCard