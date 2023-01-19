import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean,
    src: string,
    alt: string,
    percentage: string
}

const Skill = ({ directionLeft, src, alt, percentage }: Props) => {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img 
                className='rounded-2xl p-1 border border-gray-800 bg-gray-200 object-contain w-16 h-16 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
                initial={{
                    x: directionLeft ? -300 : 300,
                    opacity: 0
                }}
                transition={{ duration: 1.5 }}
                animate={{ opacity: 1, x: 0 }}
                src={src}
                alt={alt}
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray-800 w-16 h-16 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-2xl z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-2xl md:text-3xl font-bold text-white opacity-100'>{percentage}</p>
                </div>
            </div>
        </div>
    )
}

export default Skill