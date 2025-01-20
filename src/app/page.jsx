"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OurMission from "@/components/OurMission";
import Ourvision from "@/components/Ourvision";
import Team from "@/components/Team";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";

import { ToastContainer } from 'react-toastify';

export default function Home() {
  const connectdb = async()=>{
    try {
      await axios.post(`https://www.techealth.in/api/connect`)
    } catch (error) {
      
    }
  }
  useEffect(()=>{

  })
  return (
    <div>
      <ToastContainer />
      <div className="bg-gray-800">
        <div className="flex justify-center items-center mx-auto p-4">
          <div className="flex flex-col sm:flex-row sm:mr-3 ">
          <span className="block mr-3">
            <Link href="tel:+91 97173 65884" className="text-white flex items-center">
              <i className="fa fa-phone transform scale-x-[-1] mr-2"></i>+91 97173 65884
            </Link>
          </span>
          <span className="block">
            <Link href="tel:+91 62009 22552" className="text-white flex items-center">
              <i className="fa fa-phone transform scale-x-[-1] mr-2"></i>+91 62009 22552
            </Link>
          </span>
          </div>

          <span className="block">
            <Link href="mailto:techealth23@gmail.com" className="text-white flex items-center">
              <i className="fa fa-envelope mr-2"></i>techealth23@gmail.com
            </Link>
          </span>
        </div>
      </div>

      <Navbar />
      <div className="relative">
        <img src={'/Background.jpg'} className="w-full min-h-[80vh] object-cover" />
        <div className="text-white bg-slate-800/50 flex flex-col justify-center items-center h-full w-full top-0 absolute">
          <h1 className="font-bold text-[32px] md:text-[40px] lg:text-[50px]">Welcome to Techealth</h1>
          <p className="text-[14px] md:text-[16px] lg:text-[20px]">Enriching Lives</p>
        </div>
      </div>

      <About />
      <OurMission />
      <Ourvision />
      <Team />
      <Contact />

      <Footer />

    </div>
  );
}
