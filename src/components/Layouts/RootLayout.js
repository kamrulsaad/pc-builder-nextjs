import React from 'react'
import Navbar from '../Shared/Navbar'
import Footer from '../Shared/Footer'

const RootLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className='min-h-screen'>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default RootLayout