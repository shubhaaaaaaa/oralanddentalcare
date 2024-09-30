import Image from 'next/image'

function AboutUs() {
    return (
        <div className="w-full md:flex px-10 xl:pl-44 lg:pl-20 md:pl-20 py-10 text-[#112222]">
            <div className="md:w-3/4 xl:w-1/2 w-full md:mr-10">
                <h1 className="font-black text-2xl mb-5 xl:text-4xl">About Us</h1>
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

                <button className=" bg-white text-primary hover:bg-primary hover:text-white border border-primary  mt-2 leading-tight py-2 text-md px-3 rounded-md hidden md:grid">
                    Know More
                </button>
            </div>
            <div className="flex items-center justify-center my-10">
                <Image
                    src={'/images/photoshoot/braces.jpg'}
                    alt="Braces"
                    height={900}
                    width={1080}
                    className="rounded-full w-20 h-20 relative z-10 bottom-12 md:bottom-20 left-10 border-white border-4"
                />
                <Image
                    src={'/images/photoshoot/dental-cleaning.jpg'}
                    alt="Dental cleaning"
                    height={900}
                    width={1080}
                    className="rounded-full w-44 h-44 md:w-56 md:h-56"
                />
                <Image
                    src={'/images/photoshoot/dental-tool.jpg'}
                    alt="Dental tool"
                    height={900}
                    width={1080}
                    className="rounded-full w-24 h-24 md:w-26 md:h-26  relative z-10 top-14 md:top-20 right-10 md:right-14 border-white border-4"
                />
            </div>
            <button className=" bg-white text-primary hover:bg-primary hover:text-white border border-primary  mt-2 leading-tight py-2 text-md px-3 rounded-md md:hidden grid">
                Know More
            </button>
            {/* <button className=" bg-white text-primary hover:bg-primary hover:text-white border border-primary  mt-5 mb-8 leading-tight py-2 text-sm xl:text-lg px-3 rounded-md">
                More Services
            </button> */}
        </div>
    )
}

export default AboutUs
