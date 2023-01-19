import React from 'react'
import { motion } from 'framer-motion'
import projects_data from '../data/projects'

type Props = {
    index: number,
    project: {
        name: string,
        projectUrl: string,
        description: string,
        src: string,
        alt: string
    }
}

const Project = ({ index, project }: Props) => {
    return (
        <div className='w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44'>
            <motion.img 
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className='h-[200px] w-[450px] sm:h-[400px] sm:w-[550px] md:h-[400px] md:w-[600px] rounded-lg'
                src={project.src}
                alt={project.alt}
            />
            <div className='space-y-5 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-2xl md:text-4xl font-semibold text-center'>
                    <span>Project {index + 1} of {projects_data.length}:</span>{" "}
                    <a className='text-gray-300 underline decoration-[#003abf]/50 block' href={project.projectUrl} target="_blank" rel="noreferrer">{project.name}</a>
                </h4>
                <p className='md:text-lg text-center md:text-left'>{project.description}</p>
            </div>
        </div>
    )
}

export default Project