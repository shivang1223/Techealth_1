"use client"
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

function Contact() {
    const [inputValue, setInputValue] = useState({
        email: "",
        name: "",
        message: ""
    })
    const { email, name, message } = inputValue
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !name || !message) {
            toast.error("Please fill all the fields...")
            return
        }
        try {
            const { data } = await axios.post("https://www.techealth.in/api/contact", inputValue)
            toast.success(data.message);
            setInputValue({
                email: "",
                name: "",
                message: ""
            })
        } catch (error) {
            console.log(error);
            
            toast.error("somthing went wrong!!")
            return error
        }
    };

    return (
        <div id='contact_us' className="flex flex-col items-center justify-center bg-gray-100 p-4">
            <section id="contact" className="mx-auto w-[80%] py-12  sm:px-6 lg:px-8 ">

                <div className="flex flex-col md:flex-row justify-center bg-white rounded-lg shadow-lg py-8 px-6 md:px-12">
                    <div className="md:w-1/2 text-center mb-8 md:mb-0">
                        <h2 className="text-3xl font-bold text-gray-800 uppercase mb-4">Contact Us</h2>
                        <p className="text-gray-600 mb-6">Or reach out manually to <a href="mailto:techealth23@gmail.com" className="text-blue-600 hover:underline">techealth23@gmail.com</a></p>
                        <img src="plane.png" alt="Contact Us" className="hidden md:block mx-auto size-[20em] animate-bounce-slow" />

                    </div>
                    <div className="md:w-1/2">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="uf-imail" className="block text-sm font-medium text-gray-700">Email address</label>
                                <input
                                    type="email"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    id="uf-imail"
                                    name='email'
                                    aria-describedby="emailHelp"
                                    value={email}
                                    onChange={handleChange}
                                />
                                <div id="emailHelp" className="text-xs text-gray-500 mt-1">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="uf-iname" className="block text-sm font-medium text-gray-700">Your name</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    id="uf-iname"
                                    value={name}
                                    name="name"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="uf-itextarea" className="block text-sm font-medium text-gray-700">Your message</label>
                                <textarea
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    id="uf-itextarea"
                                    rows="3"
                                    value={message}
                                    name="message"
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button type="submit" onClick={handleSubmit} className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Send Message</button>
                        </form>
                    </div>
                </div>

            </section>
        </div>

    );
}

export default Contact;