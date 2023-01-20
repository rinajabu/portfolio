/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'
import projects_data from '../data/projects'
import Project from './Project'

type Props = {}

const Projects = ({}: Props) => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#003abf]/40'>
                { projects_data.map((project, i) => (
                    <Project 
                        key={project.name}
                        index={i} 
                        project={{
                            name: project.name,
                            projectUrl: project.projectUrl,
                            description: project.description,
                            src: project.src,
                            alt: project.alt
                        }}                        
                    />
                ))}
            </div>
            <div className='w-full absolute top-[30%] bg-[#003abf]/10 left-0 h-[300px] md:h-[400px] xl:h-[500px] -skew-y-12' />
        </motion.div>
    )
}

export default Projects