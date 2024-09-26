import React from 'react'
import '../globals.css'

const page = () => {
    return (
        <>
            {/* Head Section  */}
            <div className="flex bg-gradient-to-b from-[#d4f7f0] to-[#e8f7fd] overflow-clip">
                <div className="w-full xl:w-[60%] 3xl:w-[40%] xl:pl-44 lg:ps-28 md:ps-20 ps-10 text-[#112222] xl:py-20 lg:py-12 md:py-10 py-7 ">
                    <div className="font-[1000] xl:text-[3.5rem] text-2xl md:text-3xl lg:text-[2.2rem] leading-snug xl:leading-[4rem] tracking-wide xl:w-[35rem] lg:w-[20rem] w-[11rem] md:w-[20rem] ">
                        Contact Us
                    </div>

                    <div className="xl:pt-6 pt-5 text-xs xl:text-lg lg:text-[13px] w-[10rem] xl:w-[38rem] md:w-[20rem] lg:w-[20rem] 3xl:text-xl leading-5 opacity-90">
                    Reach out to us today and let us help you achieve a healthier, brighter smile. We are here to answer your questions, schedule appointments, and welcome you to our dental family with warmth and care.
                    </div>

                </div>
            </div>

            {/* Main Section  */}
            <div className="w-full px-10 xl:pl-44 lg:pl-20 md:pl-20 py-10  tracking-wide ">
                <h1 className="font-black text-2xl mb-7 xl:text-4xl">Get In Touch</h1>
                <div className="md:flex md:gap-10 xl:gap-32">
                    <div className="mb-10">
                        <div className="flex mb-5">
                                <div className="h-6 w-6 xl:w-10 xl:h-10 bg-primary rounded-[5px] mr-5 bg-contain bg-[url('/images/icons/call-white.png')] mt-1">
                                </div>
                            <div>
                                <p className="font-bold text-md xl:text-lg text-[#34e5c2f7]">Phone</p>
                                <p className="text-xs xl:text-sm">+977 01 5421267 </p>
                                <p className="text-xs xl:text-sm">+977 9841057208</p>
                                <p className="text-xs xl:text-sm">+977 9808449897</p>
                                </div>                            
                        </div>                        
                        <div className="flex mb-5">
                                <div className="h-6 w-6 xl:w-10 xl:h-10 bg-primary rounded-[5px] mr-5 bg-contain bg-[url('/images/icons/mail-white.png')] mt-1">
                                </div>
                                <div className="overflow-x-auto">
                                <p className="font-bold text-md xl:text-lg text-[#34e5c2f7]">Email</p>
                                <p className="text-xs xl:text-sm">oralanddentalcarenepal@gmail.com </p>
                                </div>                            
                        </div>                        
                        <div className="flex mb-5">
                                <div className="h-6 w-6 xl:w-10 xl:h-10 bg-primary rounded-[5px] mr-5 bg-contain bg-[url('/images/icons/clock-white.png')] mt-1">
                                </div>
                                <div>
                                <p className="font-bold text-md xl:text-lg text-[#34e5c2f7]">Opening Hours</p>
                                <p className="text-xs xl:text-sm">Sunday-Friday  9am-7pm </p>
                                <p className="text-xs xl:text-sm">Saturday  9am-12pm </p>
                                </div>                            
                        </div>                        
                        <div className="flex mb-5">
                                <div className="h-6 w-6 xl:w-10 xl:h-10 bg-primary rounded-[5px] mr-5 bg-contain bg-[url('/images/icons/location-white.png')] mt-1">
                                </div>
                                <div>
                                <p className="font-bold text-md xl:text-lg text-[#34e5c2f7]">Location</p>
                                <p className="text-xs xl:text-sm">Sunday-Friday  9am-7pm </p>
                                <p className="text-xs xl:text-sm">Saturday  9am-12pm </p>
                                </div>                            
                        </div>                        
                    </div>                        
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.618113727804!2d85.32150361744382!3d27.667284599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193c44a18c6f%3A0xd005ebf50b90738c!2sOral%20and%20Dental%20Care!5e0!3m2!1sen!2snp!4v1726807398391!5m2!1sen!2snp"
                        className="rounded-md h-52 md:h-72 xl:h-96 xl:w-3/4 xl:pr-10"
                    ></iframe>
                    
                </div>
            </div>
        </>
    )
}

export default page