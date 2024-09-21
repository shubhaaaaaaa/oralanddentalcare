'use client'

import React from 'react'
import Image from 'next/image'
import { useState, useLayoutEffect } from 'react'

function Header() {
    const [IsOpen, setIsOpen] = React.useState(false)

    //stops scrolling when hamburger menu is in display
    useLayoutEffect(() => {
        if (IsOpen) {
            document.body.style.overflow = 'hidden'
            document.body.style.height = '100vh'
            document.body.style.touchAction = 'none'
        } else {
            document.body.style.overflow = 'auto'
            document.body.style.height = 'auto'
            document.body.style.touchAction = 'auto'
        }
    }, [IsOpen])

    const handleHamburgerClick = () => {
        setIsOpen(!IsOpen)
    }

    return (
        <>
            <div className="border pr-6 pt-4 sm:pt-7">
                <div className="flex justify-center items-center">
                    <Image
                        src="/images/logo.png"
                        width={200}
                        height={10}
                        alt="logo image"
                        className="justify-self-start sm:pb-2 md:w-[220px] lg:w-[200px] xl:w-[250px] 3xl:w-[320px] "
                    />

                    <div className="xl:flex lg:flex justify-center items-center xl:gap-16 2xl:gap-24 3xl:gap-32 lg:gap-10 grid-cols-4 text-darkblue hidden xl:text-[16px] 2xl:text-[16px] 3xl:text-[22px] lg:text-[14px] xl:mx-[12rem] lg:mx-[1rem]">
                        <div className="text-center cursor-pointer hover:font-bold transform transition duration-300 ease-in-out ">
                            Our Team
                        </div>
                        <div className="text-center cursor-pointer hover:font-bold transform transition duration-300 ease-in-out ">
                            Services
                        </div>
                        <div className="text-center cursor-pointer hover:font-bold transform transition duration-300 ease-in-out ">
                            About
                        </div>
                        <div className="text-center cursor-pointer hover:font-bold transform transition duration-300 ease-in-out ">
                            Contact
                        </div>
                    </div>

                    <div>
                        <button className="xl:grid lg:grid float-right color-button  bg-primary text-white hover:bg-white hover:text-primary hover:border hover:border-primary xl:px-3 xl:py-2 lg:px-2 3xl:text-[22px] lg:py-1 rounded-xl mb-2 xl:text-[15px] lg:text-[14px] hidden xl:ml-14 lg:ml-10">
                            Book an Appointment
                        </button>
                    </div>

                    <Image
                        src="/images/hamburger.png"
                        width={26}
                        height={26}
                        alt="hamburger"
                        className="float-right pr-2 cursor-pointer ml-auto md:w-8 md:mr-6 lg:hidden xl:hidden"
                        onClick={handleHamburgerClick}
                    />
                </div>
            </div>

            {IsOpen && (
                <div className="bg-primary-100 w-full h-[100vh] text-darkgray justify-center items-right  text-sm text-center md:text-[18px] md:pt-32 sm:pt-10">
                    <ul>
                        <li className="hover:font-bold pb-5 md:pb-10">
                            <a href="#">Our Team</a>
                        </li>
                        <li className="hover:font-bold pb-5 md:pb-10">
                            <a href="#">Services</a>
                        </li>
                        <li className="hover:font-bold pb-5 md:pb-10">
                            <a href="#">About</a>
                        </li>
                        <li className="hover:font-bold pb-5 md:pb-10">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                    <div className="flex justify-center gap-3 pt-12 md:gap-6">
                        <Image
                            src="/images/facebook.png"
                            alt="facebook"
                            width={28}
                            height={28}
                            className="md:h-8 md:w-8"
                        />
                        <Image
                            src="/images/instagram.png"
                            alt="instagram"
                            width={28}
                            height={28}
                            className="md:h-8 md:w-8"
                        />
                        <Image
                            src="/images/whatsapp.png"
                            alt="whatsapp"
                            width={28}
                            height={28}
                            className="md:h-8 md:w-8"
                        />
                    </div>
                    <div className="text-[10px] flex-col items-center mt-20 md:text-[17px]">
                        <div>
                            <p className="md:pb-2">
                                &copy;2024 Oral & Dental Care. All Rights
                                Reserved.
                            </p>
                        </div>
                        <div>
                            <a
                                href="https://www.shubhakhadgi.com.np"
                                target="_blank__"
                                className="opacity-55"
                            >
                                Designed by <b>Shubha Khadgi</b>
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <div className="place-content-center bg-primary/30  z-10 flex flex-row items-center absolute top-0 left-1/2 transform -translate-x-1/2 h-[auto] w-[auto] px-4 py-2 sm:px-3 sm:py-1 rounded-b-2xl">
                <Image
                    src="/images/call.png"
                    width={20}
                    height={20}
                    alt="phone"
                    className="md:w-5 lg:w-4 xl:w-5 3xl:w-7"
                />
                <span className="text-[14px] pl-1 md:text-[16px] lg:text-[14px] xl:text-[16px] 3xl:text-[22px]">
                    +977 9841057208
                </span>
            </div>
        </>
    )
}

export default Header
