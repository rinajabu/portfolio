import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row w-[100%] md:max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                Want to learn more? <span className='underline decoration-[#003abf]/50'>Let&apos;s connect.</span> 
            </h4>
            <div className='space-y-3 md:space-y-5'>
                {/* <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#003abf] h-7 w-7 animate-pulse' />
                    <p className='text-1xl md:text-2xl'>+1 9084560530</p>
                </div> */}
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#003abf] h-7 w-7 animate-pulse' />
                    <p className='text-1xl md:text-2xl'>rinajoyabu2@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#003abf] h-7 w-7 animate-pulse' />
                    <p className='text-1xl md:text-2xl'>Old Bridge, NJ, USA</p>
                </div>
            </div>
            <form className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input placeholder='Name' className='contactInput' type="text" />
                    <input placeholder='Email' className='contactInput' type="email" />
                </div>

                <input placeholder='Subject' className='contactInput' type="text" />
                <textarea placeholder='Message' className='contactInput' />
                <button 
                    type='submit'
                    className='bg-[#003abf] py-5 px-10 rounded-md font-bold text-lg'
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default Contact