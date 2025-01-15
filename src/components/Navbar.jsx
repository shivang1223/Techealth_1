"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menu = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: "#about"
        },
        {
            name: "Product",
            link: "/Product.pdf",
        },
        {
            name: "Contact Us",
            link: "#contact_us"
        },

    ]
    return (
        <nav className="bg-gray-100 p-4 relative">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                <div className={`text-white text-lg font-bold lg:ml-40`}>
                    <Image src='/Techealth_logo.PNG' alt="" width={90} height={20} />
                </div>
                <div className="block lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-blue-500 focus:outline-none absolute top-6 right-3" >
                        {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                    </button>
                </div>
                <div className={`transition-all duration-500 ease-in-out ${isOpen ? ' max-h-screen' : 'max-h-0 lg:max-h-screen duration-0'} overflow-hidden lg:flex lg:items-center lg:w-auto lg:mr-40`} >
                    <ul className="lg:flex lg:space-x-4">
                        {menu.map((item, i) => (
                            <Link key={i} href={`${item.link}`} target={item.name === "Product" ? "_blank" : "_self"}>
                                <li className="text-blue-500  font-bold hover:bg-blue-500 hover:text-white px-3 my-2 py-2 rounded-md transition duration-300 border border-blue-500">
                                    {item.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;