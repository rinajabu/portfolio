/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: [
            "Hi, my name is Rina", 
            "I build web based solutions",
            "Take a look around"
        ],
        loop: true,
        delaySpeed: 1500,
    })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src="profile-pic.png" alt="Rina Joy Abu headshot" />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]'>Software Engineer</h2>
            <h1 className='text-4xl md:text-5xl lg:text-6xl text-gray-200 font-semibold px-10'>
                <span className='mr-1 md:mr-3'>{text}</span>
                <Cursor cursorColor='#003abf' />
            </h1>
            <div className='pt-3 md:pt-5'>
                <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                </Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero