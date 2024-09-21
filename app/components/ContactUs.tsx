function ContactUs() {
    return (
        <>
            <div className="w-full px-10 xl:pl-44 lg:pl-20 md:pl-20 py-10  tracking-wide ">
                <h1 className="font-black text-2xl mb-7 xl:text-4xl">Contact Us</h1>
                <div className="md:flex md:gap-10 xl:gap-32">
                    <div className="mb-10">
                        <div className="flex mb-5">
                                <div className="h-6 w-6 xl:w-10 xl:h-10 bg-primary rounded-[5px] mr-5 bg-contain bg-[url('/images/icons/call-white.png')] mt-1">
                                </div>
                                <div>                                    <p className="font-bold text-md xl:text-lg text-[#34e5c2f7]">Phone</p>
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
    );
}

export default ContactUs;