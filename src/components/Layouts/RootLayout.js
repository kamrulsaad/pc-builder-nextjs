import React from 'react'
import Navbar from '../Shared/Navbar'
import Footer from '../Shared/Footer'

const RootLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className='min-h-screen lg:px-20 px-6'>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default RootLayout