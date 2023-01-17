/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Projects = (props: Props) => {
    const projects = [1,2,3,4,5]

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#003abf]/40'>
                { projects.map((project, i) => (
                    <div 
                        className='w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44'
                        key={project}
                    >
                        <motion.img 
                            initial={{ y: -300, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                            className='h-[200px] w-[200px]'
                            src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" 
                            alt="project preview" 
                        />
                        <div className='space-y-5 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-2xl md:text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#003abf]/50 block'>Project {i+1} of {projects.length}:</span> Admin Dashboard
                            </h4>
                            <p className='md:text-lg text-center md:text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates repudiandae, voluptatibus expedita explicabo error delectus veniam dolor eos optio facilis aperiam, quas accusamus asperiores quidem exercitationem, nam sit!</p>
                        </div>
                    </div>
                ))

                }
            </div>
            <div className='w-full absolute top-[30%] bg-[#003abf]/10 left-0 h-[300px] md:h-[400px] xl:h-[500px] -skew-y-12' />
        </motion.div>
    )
}

export default Projects