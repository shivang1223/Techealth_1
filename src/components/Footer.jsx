import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className="bg-gray-800 text-white text-center p-4">
            <p>&copy; 2024 Techealth Apex Private Limited.<br />All Rights Reserved. <Link href="#" className="text-blue-700 underline">Privacy Policy</Link></p>
        </footer>

    )
}

export default Footer
