import React from 'react'
import Image from 'next/image'

function HeroSection() {
    return (
        <>
            <div className="flex bg-gradient-to-b from-[#d4f7f0] to-[#e8f7fd]">
                <div className="w-full xl:w-[60%] 3xl:w-[40%] xl:h-[35rem]  lg:h-[22rem] xl:pl-44 lg:ps-28 md:ps-20 ps-10 text-[#112222]">
                    <div className="font-[1000] xl:text-[3.5rem] text-2xl md:text-3xl lg:text-[2.2rem] xl:pt-20 lg:pt-12 pt-7 leading-snug xl:leading-[4rem] tracking-wide xl:w-[35rem] lg:w-[20rem] w-[11rem] md:w-[20rem] md:pt-10">
                        We take care of your dental health
                    </div>

                    <div className="xl:pt-6 pt-5 text-xs xl:text-lg lg:text-[13px] w-[10rem] xl:w-[38rem] md:w-[20rem] lg:w-[20rem] 3xl:text-xl leading-5 opacity-90">
                        Our mission is to provide the best dental care with a
                        focus on your comfort and well-being. We are dedicated
                        to ensuring your smile stays healthy and beautiful.
                    </div>

                    <button className="bg-primary text-white hover:bg-white hover:text-primary hover:border hover:border-primary xl:px-3 xl:py-2 lg:px-2 lg:py-1 xl:rounded-xl lg:xl:rounded-xl xl:text-[18px] lg:text-[14px] xl:mt-12 mt-7 mb-10 leading-tight py-1 text-sm px-2 rounded-lg 3xl:text-[26px]">
                        Book an Appointment
                    </button>
                </div>
                <Image
                    src={'/images/photoshoot/nurse-photo.png'}
                    alt="Team Member"
                    width={200}
                    height={100}
                    className="mr-24 md:mr-20 pt-8 overflow-clip lg:w-[13rem] xl:w-fit 3xl:w-fit "
                />
            </div>
        </>
    )
}

export default HeroSection
