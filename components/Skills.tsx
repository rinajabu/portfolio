import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

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
            <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover for current proficiency</h3>
            <div className='absolute top-48 grid grid-cols-4 gap-5'>
                <Skill 
                    src={'/tech/javascript.svg'} 
                    alt={'javascript logo'} 
                    percentage={'90%'} 
                />
                <Skill 
                    src={'/tech/html.svg'} 
                    alt={'html logo'} 
                    percentage={'90%'} 
                />
                <Skill 
                    src={'/tech/css.svg'} 
                    alt={'css logo'} 
                    percentage={'90%'} 
                />
                <Skill 
                    src={'/tech/react.svg'} 
                    alt={'react logo'} 
                    percentage={'90%'} 
                />
                <Skill
                    directionLeft={true} 
                    src={'/tech/redux.svg'} 
                    alt={'redux logo'} 
                    percentage={'85%'} 
                />
                <Skill
                    directionLeft={true} 
                    src={'/tech/nextjs.svg'} 
                    alt={'nextjs logo'} 
                    percentage={'80%'} 
                />
                <Skill
                    directionLeft={true} 
                    src={'/tech/python.svg'} 
                    alt={'python logo'} 
                    percentage={'80%'} 
                />
                <Skill
                    directionLeft={true} 
                    src={'/tech/flask.svg'} 
                    alt={'flask logo'} 
                    percentage={'80%'} 
                />
                <Skill 
                    src={'/tech/mysql.svg'} 
                    alt={'mysql logo'} 
                    percentage={'80%'} 
                />
                <Skill 
                    src={'/tech/redis.svg'} 
                    alt={'redis logo'} 
                    percentage={'85%'} 
                />
                <Skill 
                    src={'/tech/nodejs.svg'} 
                    alt={'nodejs logo'} 
                    percentage={'60%'} 
                />
                <Skill 
                    src={'/tech/express.svg'} 
                    alt={'express logo'} 
                    percentage={'60%'} 
                />
                <Skill
                    directionLeft={true} 
                    src={'/tech/mongodb.svg'} 
                    alt={'mongodb logo'} 
                    percentage={'60%'} 
                />
                <Skill
                    directionLeft={true} 
                    src={'/tech/typescript.svg'} 
                    alt={'typescript logo'} 
                    percentage={'50%'} 
                />
                <Skill
                    directionLeft={true} 
                    src={'/tech/sass.svg'} 
                    alt={'sass logo'} 
                    percentage={'90%'} 
                />
                <Skill
                    directionLeft={true} 
                    src={'/tech/material-ui.svg'} 
                    alt={'material-ui logo'} 
                    percentage={'90%'} 
                />
            </div>
        </motion.div>
    )
}

export default Skills