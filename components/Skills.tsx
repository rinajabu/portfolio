import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import skills_data from '../data/skills'

type Props = {}

const Skills = (props: Props) => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='min-h-screen flex relative flex-col text-center md:text-left xl:flex-row xl:px-10 justify-center xl:space-y-0 mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
            <h3 className='absolute top-48 uppercase tracking-[3px] text-gray-500 text-sm'>Hover for current proficiency</h3>
            <div className='absolute top-60 grid grid-cols-4 gap-5'>
                { skills_data.map((skill, i) => (
                    <Skill 
                        key={i}
                        src={skill.src} 
                        alt={skill.alt} 
                        percentage={skill.percentage} 
                        directionLeft={skill.directionLeft}
                    />
                ))}
            </div>
        </motion.div>
    )
}

export default Skills