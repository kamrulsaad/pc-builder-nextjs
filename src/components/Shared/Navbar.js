import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href='/'>Home</Link></li>
                        <li>
                            <details>
                                <summary>Categories</summary>
                                <ul>
                                    <li>
                                        <Link href='/cpu'>CPU</Link>
                                    </li>
                                    <li>
                                        <Link href='/motherboard'>Motherboard</Link>
                                    </li>
                                    <li>
                                        <Link href='/ram'>RAM</Link>
                                    </li>
                                    <li>
                                        <Link href='/psu'>Power Supply Unit</Link>
                                    </li>
                                    <li>
                                        <Link href='/storage'>Storage Device</Link>
                                    </li>
                                    <li>
                                        <Link href='/monitor'>Monitor</Link>
                                    </li>
                                    <li>
                                        <Link href='/other'>Others</Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <Link href='/' className='lg:text-3xl md:text-2xl text-lg uppercase font-bold'>Big Tech</Link>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    <li><Link href='/'>Home</Link></li>
                    <li>
                        <details>
                            <summary>Categories</summary>
                            <ul>
                                <li>
                                    <Link href='/cpu'>CPU</Link>
                                </li>
                                <li>
                                    <Link href='/motherboard'>Motherboard</Link>
                                </li>
                                <li>
                                    <Link href='/ram'>RAM</Link>
                                </li>
                                <li>
                                    <Link href='/psu'>Power Supply Unit</Link>
                                </li>
                                <li>
                                    <Link href='/storage'>Storage Device</Link>
                                </li>
                                <li>
                                    <Link href='/monitor'>Monitor</Link>
                                </li>
                                <li>
                                    <Link href='/other'>Others</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
                <a className="btn btn-primary btn-sm">PC Builder</a>
            </div>
        </div>
    )
}

export default Navbar