import React from 'react'
import Image from 'next/image'

function Footer() {
    return (
        <div className="w-full relative">
            <Image
                src="/images/logo.png"
                alt="logo"
                width={200}
                height={10}
                className="absolute left-0 mt-4 md:left-5 xl:hidden 2xl:hidden lg:hidden"
            />
            <div className="grid xl:grid-cols-3 2xl:grid lg:grid-cols-3 grid-cols-2 sm:gap-6 bg-gradient-to-b from-primary-100 to-white-300 xl:px-16 2xl:px-16 xl:py-12 lg:px-6 lg:py-8 md:px-6 md:py-8 2xl:py-12">
                <div>
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={290}
                        height={50}
                        className="xl:pb-20 lg:pb-20 2xl:pb-40 pb-4 xl:grid 2xl:grid lg:grid hidden"
                    />
                    <div className="sm:mt-24 pl-5 xl:hidden 2xl:hidden lg:hidden">
                        <h1 className="text-darkgray pb-5 text-sm xl:text-xl 2xl:text-xl">
                            Contact Us
                        </h1>
                        <div className="grid grid-cols-[auto,1fr] gap-3  pb-4">
                            <div>
                                <Image
                                    src="/images/icons/call.png"
                                    alt="call"
                                    width={15}
                                    height={15}
                                />
                            </div>
                            <div className="text-xs">
                                <p>+977 01 5421267</p>
                                <p>+977 9841057208</p>
                                <p>+977 9808449897</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-[auto,1fr] gap-3 pb-4 break-words">
                            <div>
                                <Image
                                    src="/images/icons/mail.png"
                                    alt="mail"
                                    width={15}
                                    height={15}
                                />
                            </div>
                            <div className="text-xs overflow-x-auto">
                                <p>oralanddentalcarenepal@gmail.com</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-[auto,1fr] gap-3 pb-4 text-xs">
                            <div>
                                <Image
                                    src="/images/icons/location.png"
                                    alt="location"
                                    width={15}
                                    height={15}
                                />
                            </div>
                            <div>
                                <p>Lagankhel Bus Park, Lalitpur </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-[auto,1fr] gap-3 text-xs pb-4">
                            <div>
                                <Image
                                    src="/images/icons/clock.png"
                                    alt="clock"
                                    width={15}
                                    height={15}
                                />
                            </div>
                            <div>
                                <h2 className="pb-2">Working Hours</h2>
                                <p className="xl:text-sm 2xl:text-sm text-xs pb-2">
                                    Sunday - Friday <br />
                                    9:00am - 7:00pm
                                </p>
                                <p className="xl:text-sm 2xl:text-sm text-xs pb-2">
                                    Saturday <br />
                                    9:00am - 12:00pm
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm pl-3 xl:grid 2xl:grid lg:grid sm:hidden">
                        Stay in touch
                    </p>
                    <div className="hidden gap-2 pt-1 xl:gap-3 2xl:gap-3 xl:pt-3 lg:pt-3 2xl:pt-3 2xl:font-medium xl:font-medium pl-3 xl:flex 2xl:flex lg:flex ">
                        <Image
                            src="/images/icons/facebook.png"
                            alt="facebook"
                            width={20}
                            height={20}
                            className="xl:w-6 2xl:w-6"
                        />
                        <Image
                            src="/images/icons/instagram.png"
                            alt="instagram"
                            width={20}
                            height={20}
                            className="xl:w-6 2xl:w-6"
                        />
                        <Image
                            src="/images/icons/whatsapp.png"
                            alt="whatsapp"
                            width={20}
                            height={20}
                            className="xl:w-6 2xl:w-6"
                        />
                    </div>
                </div>
                <div className="text-xs sm:mt-24 lg:mt-0 xl:text-sm 2xl:text-sm">
                    <h1 className="text-darkgray pb-5 text-sm xl:text-xl 2xl:text-xl">
                        Services
                    </h1>

                    <p className="pb-2">Checkup & Diagnostics </p>
                    <p className="pb-2">X-Ray (IOPA) </p>
                    <p className="pb-2">Periodontic Treatment </p>
                    <p className="pb-2">Endodontic Treatment </p>
                    <p className="pb-2">Prosthodontic Treatment </p>
                    <p className="pb-2">Pedodontic Treatment </p>
                    <p className="pb-2">Oral & Maxillofacial Surgery </p>
                    <p className="pb-2">Orthodontic Treatment </p>
                    <p className="pb-2">Cosmetic Treatment </p>
                </div>
                <div className="hidden xl:grid 2xl:grid lg:grid">
                    <h1 className="text-darkgray pb-5 text-sm xl:text-xl 2xl:text-xl">
                        Contact Us
                    </h1>
                    <div className="grid grid-cols-[auto,1fr] gap-4  pb-4">
                        <div>
                            <Image
                                src="/images/icons/call.png"
                                alt="call"
                                width={15}
                                height={15}
                                className="pt-[2px]"
                            />
                        </div>
                        <div className="text-xs xl:text-sm 2xl:text-sm">
                            <p>+977 01 5421267</p>
                            <p>+977 9841057208</p>
                            <p>+977 9808449897</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-[auto,1fr] gap-4 pb-4 break-words">
                        <div>
                            <Image
                                src="/images/icons/mail.png"
                                alt="mail"
                                width={15}
                                height={15}
                                className="pt-[2px]"
                            />
                        </div>
                        <div className="text-xs overflow-hidden xl:text-sm 2xl:text-sm">
                            <p>oralanddentalcarenepal@gmail.com</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-[auto,1fr] gap-4 pb-4 text-xs xl:text-sm 2xl:text-sm">
                        <div>
                            <Image
                                src="/images/icons/location.png"
                                alt="location"
                                width={15}
                                height={15}
                                className="pt-[2px]"
                            />
                        </div>
                        <div>
                            <p>Lagankhel Bus Park-12, Lalitpur </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-[auto,1fr] gap-4 text-xs pb-4 xl:text-sm 2xl:text-sm">
                        <div>
                            <Image
                                src="/images/icons/clock.png"
                                alt="clock"
                                width={15}
                                height={15}
                                className="pt-[2px]"
                            />
                        </div>
                        <div>
                            <h2 className="pb-2">Working Hours</h2>
                            <p className="xl:text-sm 2xl:text-sm text-xs pb-2">
                                Sunday - Friday <br />
                                9:00am - 7:00pm
                            </p>
                            <p className="xl:text-sm 2xl:text-sm text-xs pb-2">
                                Saturday <br />
                                9:00am - 12:00pm
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <p className="text-sm pl-3 md:pl-10 xl:hidden 2xl:hidden lg:hidden pt-4">
                Stay in touch
            </p>
            <div className="flex gap-2 pt-2 pl-3 pb-4 md:pl-10 xl:hidden 2xl:hidden lg:hidden">
                <Image
                    src="/images/icons/facebook.png"
                    alt="facebook"
                    width={23}
                    height={23}
                />
                <Image
                    src="/images/icons/instagram.png"
                    alt="instagram"
                    width={23}
                    height={23}
                />
                <Image
                    src="/images/icons/whatsapp.png"
                    alt="whatsapp"
                    width={23}
                    height={23}
                />
            </div>
            <div className="text-[10px] bg-primary h-12 w-full text-white flex justify-between items-center px-3 xl:pl-20 lg:pl-10 2xl:pl-20 xl:pr-24 lg:pr-8 2xl:pr-24 xl:text-sm 2xl:text-sm lg:text-sm md:pl-10 md:pr-14">
                <span>&copy;2024 Oral & Dental Care. All Rights Reserved.</span>
                <a
                    className="right-0 text-[8px] xl:text-xs lg:text-xs 2xl:text-xs opacity-80"
                    href="https://www.shubhakhadgi.com.np"
                >
                    Designed by <b>Shubha Khadgi</b>
                </a>
            </div>
        </div>
    )
}

export default Footer
