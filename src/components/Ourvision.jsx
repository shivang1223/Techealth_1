import React from 'react'

function Ourvision() {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="w-[80%]  flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-[1.02]">
                <img
                    className="w-full object-cover size-60"
                    src="https://i0.wp.com/highspeedmag.com/wp-content/uploads/2023/10/photo60708aead6927-scaled.jpg"
                    alt="Random"
                />
                <div className="p-6">
                    <h2 className="text-[30px] font-bold mb-2">OUR VISION</h2>
                    <p className="text-gray-700 text-base">
                        To become a global leader in IoT-driven safety solutions, fostering trust, reliability, and unparalleled quality. We envision a world where technology ensures safety and security for everyone. </p>
                </div>

            </div>
        </div>
    )
}

export default Ourvision
