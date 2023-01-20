import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import experience_data from '../data/experience'

type Props = {}

function WorkExperience({}: Props) {

  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-5 md:px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#003abf]/40'>
          { experience_data.map((item) => (
            <ExperienceCard 
              key={item.company}
              jobTitle={item.jobTitle} 
              company={item.company} 
              datesWorked={item.datesWorked} 
              techUsed={item.techUsed} 
              description={item.description} 
            />
          ))}
        </div>
    </motion.div>
  )
}

export default WorkExperience