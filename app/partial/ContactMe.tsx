/** @format */

"use client";
import React from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  phone: number;
  email: string;
  message: string;
};

type Props = {};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    (window.location.href = `mailto:dikihidayat.dh@gmail.com?subject=${formData.message}&body=Hi, My name is ${formData.name}. ${formData.message} (${formData.email})`);
  return (
    <div className="h-screen flex relative flex-col text-clip md:text-left md:flex-row w-3/4 px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-30">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="2xl:text-4xl xl:4xl lg:text-3xl md:text-2xl sm:text-2xl xs:text-lg font-semibold text-center">
          Keep in touch with me. {""}
          <span className="underline decoration-[#F7AB0A]/50">Lets Talk</span>
        </h4>
        <div>
          <div className="flex items-center space-x-5  justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="2xl:text-4xl xl:4xl lg:text-3xl md:text-2xl sm:text-2xl xs:text-xl">
              +62-896-1271-6535
            </p>
          </div>

          <div className="flex items-center space-x-5 space-y-2 pb-10 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="2xl:text-4xl xl:4xl lg:text-3xl md:text-2xl sm:text-2xl xs:text-xl">
              dikihidayat.dh@gmail.com
            </p>
          </div>

          {/* <div className='flex items-center space-x-5 space-y-2 pb-10 justify-center'>
                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>123 Developer Lane</p>
                    </div> */}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-4 w-full max-w-2xl mx-auto p-4 bg-dark rounded-md shadow-lg"
          >
            {/* Baris Pertama: Name dan Phone */}
            <div className="flex space-x-4 gap-1">
              <input
                {...register("name", { required: true })}
                placeholder="Name"
                className="w-1/2 px-4 py-2 border bg-gray-800 border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
              />
              <input
                {...register("phone", { required: true })}
                placeholder="Phone"
                className="w-1/2 px-4 py-2 border bg-gray-800 border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
              />
            </div>

            {/* Baris Kedua: Email */}
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              className="w-full px-4 py-2 border bg-gray-800 border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
            />

            {/* Baris Ketiga: Pesan */}
            <input
              {...register("message", { required: true })}
              placeholder="Pesan"
              className="w-full px-4 py-2 border bg-gray-800 border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
            />

            {/* Baris Keempat: Message Text Area */}
            <textarea
              {...register("message", { required: true })}
              placeholder="Message"
              className="w-full px-4 py-2 border bg-gray-800 border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            ></textarea>

            {/* Tombol Submit */}
            <button
              type="submit"
              className="bg-[#F7AB0A]/60 text-white py-2 px-4 rounded-md hover:bg-[#a37f32] transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
