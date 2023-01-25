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
        <article className='w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44'>
            <motion.img 
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className='h-[150px] w-[217px] sm:h-[250px] sm:w-[361px] md:h-[400px] md:w-[506px] rounded-lg'
                src={project.src}
                alt={project.alt}
            />
            <div className='space-y-5 px-0 xl:px-10 max-w-6xl'>
                <h4 className='text-2xl md:text-4xl font-semibold text-center'>
                    <span>Project {index + 1} of {projects_data.length}:</span>{" "}
                    <a className='underline decoration-[#003abf] block' href={project.projectUrl} target="_blank" rel="noreferrer">{project.name}</a>
                </h4>
                <p className='md:text-lg text-center xl:text-left'>{project.description}</p>
            </div>
        </article>
    )
}

export default Project