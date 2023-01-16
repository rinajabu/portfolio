import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean
}

const Skill = ({ directionLeft }: Props) => {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img 
                className='rounded-full border border-gray-500 object-cover w-16 h-16 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"
                alt="tech logo"
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-2xl md:text-3xl font-bold text-black opacity-100'>90%</p>
                </div>
            </div>
        </div>
    )
}

export default Skill