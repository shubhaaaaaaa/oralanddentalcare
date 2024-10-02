import React from 'react'
import '../globals.css'

import Image from 'next/image'

const page = () => {
    return (
        <>
            {/* Head Section  */}
            <div className="flex bg-gradient-to-b from-[#d4f7f0] to-[#e8f7fd] overflow-clip">
                <div className="w-full xl:w-[60%] 3xl:w-[40%] xl:pl-44 lg:ps-28 md:ps-20 ps-10 text-[#112222] xl:py-20 lg:py-12 md:py-10 py-7 ">
                    <div className="font-[1000] xl:text-[3.5rem] text-2xl md:text-3xl lg:text-[2.2rem] leading-snug xl:leading-[4rem] tracking-wide xl:w-[35rem] lg:w-[20rem] w-[11rem] md:w-[20rem] ">
                        About Us
                    </div>

                    <div className="xl:pt-6 pt-5 text-xs xl:text-lg lg:text-[13px] w-[10rem] xl:w-[38rem] md:w-[20rem] lg:w-[20rem] 3xl:text-xl leading-5 opacity-90">
                    Our clinic is dedicated to providing high-quality dental care with a personal touch. We believe in building lasting relationships with our patients through trust, compassion, and exceptional service.
                    </div>

                </div>
            </div>

            {/* Our Story Section  */}
            <div className="w-full md:flex px-10 xl:pl-44 lg:pl-20 md:pl-20 py-10 text-[#112222]">
            <div className="md:w-3/4 xl:w-1/2 w-full md:mr-10">
                <h1 className="font-black text-2xl mb-5 xl:text-4xl">Our Story</h1>
                <p className='text-sm xl:text-lg pb-2'>
                    At Oral and Dental Care, our mission is to deliver
                    comprehensive dental care in a comfortable and friendly
                    environment. We strive to ensure that every patient feels
                    valued and receives the best possible treatment tailored to
                    their individual needs.
                </p>
                <div className="flex gap-3 xl:gap-10 my-10 pb-5 text-primary">
                    <div>
                        <p className="text-2xl xl:text-4xl font-bold">14+</p>
                        <p className="text-sm xl:text-lg">Years of experience</p>
                    </div>
                    <div>
                        <p className="text-2xl xl:text-4xl font-bold">99%</p>
                        <p className="text-sm xl:text-lg">Customer Satisfaction</p>
                    </div>
                    <div>
                        <p className="text-2xl xl:text-4xl font-bold">10000+</p>
                        <p className="text-sm xl:text-lg">Happy clients served</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center my-10">
                <Image
                    src={'/images/photoshoot/braces.jpg'}
                    alt="Braces"
                    height={500}
                    width={600}
                    className=""
                />
            </div>
            </div>

            {/* What We Do Section  */}
            <div className="w-full px-10 xl:pl-44 lg:pl-20 md:pl-20 pt-10 text-[#112222]">
                <h1 className="font-black text-2xl mb-5 xl:text-4xl">What We Do</h1>
                <div className="md:flex mt-10 gap-5">
                        <Image
                            src={'/images/photoshoot/braces.jpg'}
                            alt="Braces"
                            height={500}
                            width={400}
                            className="sm:mb-10"
                        />
                    <div className='text-sm xl:text-lg pb-2'>
                        We offer a wide range of dental services tailored to meet your unique needs. Our experienced team utilizes the best technique to ensure you receive the highest quality care.
                        <ul className='list-disc ps-5'> <br />
                            <li className='py-1'>Checkup & Diagnostics</li>
                            <li className='py-1'>X-Ray (IOPA)</li>
                            <li className='py-1'>Periodontic Treatment</li>
                            <li className='py-1'>Endodontic Treatment</li>
                            <li className='py-1'>Prosthodontic Treatment</li>
                            <li className='py-1'>Pedodontic Treatment</li>
                            <li className='py-1'>Oral & Maxillofacial Surgery</li>
                            <li className='py-1'>Orthodontic Treatment</li>
                            <li className='py-1'>Cosmetic Treatment</li>
                        </ul>
                    </div>
                </div>  
                <div className='flex gap-10'>
                    <a href="/contact">
                        <button className=" bg-primary text-white hover:bg-white hover:text-primary border border-primary  mt-5 mb-8 leading-tight py-2 text-sm xl:text-lg px-3 rounded-md">
                        Contact Us
                        </button>
                    </a>
                    <a href="/services">
                    <button className=" bg-white text-primary hover:bg-primary hover:text-white border border-primary  mt-5 mb-8 leading-tight py-2 text-sm xl:text-lg px-3 rounded-md">
                        More Services
                    </button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default page