import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {}

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

const Contact = (props: Props) => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.open(`mailto:rinajoyabu2@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`, '_blank')
    };

    return (
        <div className='h-screen relative flex flex-col text-center md:text-left md:flex-rows w-screen md:max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
            <div className='flex flex-col space-y-5 md:space-y-10'>
                <h4 className='text-3xl md:text-4xl font-semibold text-center'>
                    <span className='underline decoration-[#003abf]/50'>Let&apos;s connect!</span> 
                </h4>
                {/* <div className='space-y-1 md:space-y-3'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#003abf] h-7 w-7 animate-pulse' />
                        <p className='text-1xl md:text-2xl'>+1 9084560530</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#003abf] h-7 w-7 animate-pulse' />
                        <p className='text-1xl md:text-2xl'>rinajoyabu2@gmail.com</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#003abf] h-7 w-7 animate-pulse' />
                        <p className='text-1xl md:text-2xl'>Old Bridge, NJ, USA</p>
                    </div>
                </div> */}
                <form 
                    onSubmit={handleSubmit(onSubmit)} 
                    className='flex flex-col space-y-2 w-screen md:w-fit mx-auto px-5 md:px-0'
                >
                    <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>

                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    <button 
                        type='submit'
                        className='bg-[#003abf]/90 py-5 px-10 rounded-md font-bold text-lg'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact