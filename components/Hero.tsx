import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: [
            "Hi, my name is Rina.", "I'm a software engineer.", "Let's chat!"
        ],
        loop: true,
        delaySpeed: 1500,
    })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='#2932e0' />
        </h1>
    </div>
  )
}

export default Hero