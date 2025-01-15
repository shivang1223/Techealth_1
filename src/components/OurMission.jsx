import React from 'react'

function OurMission() {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="w-[80%]  flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-[1.02]">

                <div className="p-6">
                    <h2 className="text-[30px] font-bold mb-2">OUR MISSION</h2>
                    <p className="text-gray-700 text-base">
                        At Techealth, our mission is to harness the power of innovation and technology to create safer roads and smarter solutions for a better tomorrow. We are dedicated to developing cutting-edge IoT and AI-driven safety devices that enhance the efficiency, security, and reliability of transportation systems.
                    </p>
                </div>
                <img
                    className="w-full object-cover size-60"
                    src="https://digiqt.com/blog-images/Ai-Report/aiwilldrasticallyreducecaraccidents1.png"
                    alt="Random"
                />
            </div>
        </div>
    )
}

export default OurMission
