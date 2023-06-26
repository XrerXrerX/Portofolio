'use client'
import React from 'react'
import { PhoneIcon } from '@heroicons/react/24/solid'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"



type Inputs = {
    name: string;
    phone: number;
    email: string;
    message: string;
};

type Props = {}

export default function ContactMe({ }: Props) {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (formData) => window.location.href = `mailto:dikihidayat.dh@gmail.com?subject=${formData.subject}&body=Hi, My name is ${formData.name}. ${formData.message} (${formData.email})`;
    return (
        <div className='h-screen flex relative flex-col text-clip md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-30'>Contact</h3>

            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    Keep in touch with me. {""}
                    <span className='underline decoration-[#F7AB0A]/50'>Lets Talk</span>
                </h4>
                <div>
                    <div className='flex items-center space-x-5  justify-center'>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>+62 858-1156-8813</p>
                    </div>

                    <div className='flex items-center space-x-5 space-y-2 pb-10 justify-center'>
                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>dikihidayat.dh@gmail.com</p>
                    </div>

                    {/* <div className='flex items-center space-x-5 space-y-2 pb-10 justify-center'>
                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>123 Developer Lane</p>
                    </div> */}

                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto' >
                        <div className='flex space-x-2'>
                            <input {...register('name')} placeholder="name" className='contacInput' type='text' />
                            <input {...register('phone')} placeholder="phone" className='contacInput' type='text' />
                        </div>
                        <input {...register('email')} placeholder="Email" className='contacInput' type='email' />
                        <textarea {...register('message')} placeholder="message" className='contacInput' />
                        <button type="submit" className='bg-[#F7AB0A]/70 py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}