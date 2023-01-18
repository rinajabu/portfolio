import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

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
          <ExperienceCard 
            jobTitle={'Software Engineer'} 
            company={'SEMPRE (Secure EMP-Resistant Edge)'} 
            datesWorked={'October 2021 - present'} 
            techUsed={[
              {
                name: "react",
                src: "/tech/react.png",
                alt: "react logo"
              },
              {
                name: "nextjs",
                src: "/tech/nextjs.png",
                alt: "nextjs logo"
              },
            ]} 
            description={[
              "- Leveraged React.js/Redux to build the frontend of our internal web management application",
              "- Leveraged Python/Flask and SQLAlchemy to build the backend REST API",
              "- Leveraged MySQL and Redis to manage, store, and send data between systems",
              "- Migrated customer facing company sites to our Github code base using Next.js, SASS, and Bootstrap, tested code using Cypress"
            ]} 
          />
          <ExperienceCard 
            jobTitle={'Software Engineer Fellow'} 
            company={'General Assembly'} 
            datesWorked={'June 2021 - September 2021'} 
            techUsed={[
              {
                name: "react",
                src: "/tech/react.png",
                alt: "react logo"
              },
            ]} 
            description={[
              "- Three-month, 500-hour full-time and full-stack program conducted in a remote setting, gaining experience with the latest front- and back-end programming languages, tools, and methodologies including: HTML, CSS, JavaScript, ReactJS, Node, MongoDB/Mongoose, Express, SQL, Python, Django, Git, Github, and Agile/Scrum."
            ]} 
          />
        </div>
    </motion.div>
  )
}

export default WorkExperience