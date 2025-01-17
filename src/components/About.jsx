import React from 'react';

function About() {
    return (
        <div id='about' className="flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="w-[80%] flex-col lg:flex-row flex bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-[1.02]">
                <img
                    className="w-full object-cover size-60"
                    src="https://www.pngmart.com/files/About-Us-Download-PNG-Image.png"
                    alt="Random"
                />
                <div className="p-6">
                    <h2 className="text-[30px] font-bold mb-2">About Us</h2>
                    <p className="text-gray-700 text-base">
                    Techealth Apex Private Limited specializes in IoT-powered innovations for road and vehicle safety.
                    With advanced solutions like EmergencyEye, we integrate intelligent devices to enhance driver safety,
                    enable real-time vehicle monitoring, and revolutionize smart fleet management.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;