import React from 'react'
import { useForm } from "react-hook-form"
import { useState } from 'react'
import Modal from '../Modal/Modal';
import axios from 'axios';

function Contact(){

    const [openModal, setOpenModal] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {

        axios.post('https://hamsa-backend-nr8k.onrender.com/api/contact-info', data)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
        });
        
        console.log(data)
        reset()
    }

    return(
        <>
                <div className="bg-yellow-300 w-full min-h-screen pb-20">
                    <div className="flex flex-col justify-center items-center w-full">
                        <div className="mt-12">
                            <h3 className="font-bold font-mono text-[13px] sm:text-3xl">
                                Let’s Make Your Celebration Unforgettable!
                            </h3>
                        </div>

                        <div className="mx-auto max-w-6xl text-center p-6">
                            <p className="sm:text-lg leading-relaxed">
                                Don’t wait! Contact us today and let’s start planning the perfect beverage experience for your next gathering.
                            </p>
                            <p className="sm:text-lg leading-relaxed">
                                At <span className="font-bold">Hamsa</span>, we’re excited to be part of your celebration! Whether it’s specific beverages, quantities, or unique packaging.
                            </p>
                            <p className="sm:text-lg leading-relaxed">
                            Simply share the details, and our team will reach out to you to craft the perfect selection for your event!
                            </p>
                        </div>
                    </div>

                    {/* Contact Us Form */}
                    <div className="max-w-2xl mx-auto p-6 bg-amber-950 text-white rounded-lg shadow-lg mt-10">
                        <h2 className="text-2xl font-semibold text-center mb-4">Let’s Connect</h2>
                        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor='FirstName' className="block text-sm font-medium">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 bg-yellow-700 border border-amber-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-600 mt-2"
                                        placeholder="Bonnie"
                                        autoComplete="off" 
                                        {...register("firstName", {required: true})}
                                    />
                                    {errors.firstName && <div className='text-red-500 text-sm mt-1'> This field is required! </div>}
                                </div>
                                <div>
                                    <label htmlFor='LastName' className="block text-sm font-medium">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 bg-yellow-700 border border-amber-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-600 mt-2"
                                        placeholder="Green"
                                        autoComplete="off" 
                                        {...register("secondName")}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor='Email' className="block text-sm font-medium">Your Email</label>
                                    <input
                                        type="email"
                                        className="w-full p-3 bg-yellow-700 border border-amber-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-600 mt-2"
                                        placeholder="name@example.com"
                                        autoComplete="off" 
                                        {...register("email", {required: true})}
                                    />
                                    {errors.email && <div className='text-red-500 text-sm mt-1'> This field is required! </div>}                                    
                                </div>
                                <div>
                                    <label htmlFor='MobileNumber' className="block text-sm font-medium">Phone Number</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 bg-yellow-700 border border-amber-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-600 mt-2"
                                        placeholder="+91 XXXXX XXXXX"
                                        autoComplete="off" 
                                        {...register("mobile", {required: true, minLength: 10})}            
                                    />
                                    {errors.mobile && <div className='text-red-500 text-sm mt-1'> This field is required! </div>}                                    
                                </div>
                            </div>

                            <div>
                                <label htmlFor='Message' className="block text-sm font-medium">Your Message</label>
                                <textarea
                                    className="w-full p-3 bg-yellow-700 border border-amber-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-600 h-32 mt-2"
                                    placeholder="Leave us a message..."
                                    autoComplete="off" 
                                    {...register("message")}
                                ></textarea>
                            </div>

                            <div className="text-center">
                                <button 
                                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold text-lg w-full md:w-auto hover:cursor-pointer"
                                    type='submit'
                                    onClick={()=>{
                                        setOpenModal(true)
                                    }}
                                >
                                    Let's Connect!
                                </button>
                            </div>
                        </form>
                    </div>                    
                    {!errors.firstName && !errors.mobile && !errors.email && openModal && <Modal closeModal={setOpenModal}/>}
                </div>
        </>
    )
}

export default Contact 