import React from 'react'

function Team() {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="w-[80%] justify-center flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-[1.02]">

                <h2 className="text-[30px] font-bold mb-2">OUR TEAM</h2>
                <div className="p-6 flex-col md:flex-row flex justify-around items-center w-full">

                    <div className="flex justify-center items-center flex-col">
                        <div className="size-36 rounded-full overflow-hidden mb-2.5">
                            <img src="/Shivang.jpg" alt="Team Member 1" className="w-full h-full" />
                        </div>

                        <h1 className='text-2xl font-bold'>Shivang Tiwari</h1>
                        <p>CEO</p>

                    </div>



                    <div className="flex justify-center items-center flex-col">
                        <div className="size-36 rounded-full overflow-hidden mb-2.5">
                            <img src="/Gaurav.jpg" alt="Team Member 1" className="w-full h-full" />
                        </div>

                        <h1 className='text-2xl font-bold'>Gaurav Kumar</h1>
                        <p>COO</p>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default Team
