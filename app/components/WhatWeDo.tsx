import Image from "next/image"

function WhatWeDo() {
    return (
        <>
            <div className="w-full px-10 xl:pl-44 lg:pl-20 md:pl-20 py-10 text-[#112222] h-fit">
                <h1 className="font-extrabold text-2xl mb-10 xl:text-4xl">What We Do</h1>
                <div className="lg:flex md:flex">
                    <div className="lg:w-1/2 md:w-1/2 w-full">
                        <Image
                            src={'/images/photoshoot/dentist-examining.jpg'}
                            alt="Dentist examining"
                            width={250}
                            height={100}
                            className="rounded-xl h-4/6 w-4/5 xl:h-3/4"
                            />                      
                        <button className=" bg-white text-primary hover:bg-primary hover:text-white border border-primary  mt-5 mb-8 leading-tight py-2 text-sm xl:text-lg px-3 rounded-md">
                            More Services
                        </button>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 w-full text-sm xl:text-[18px] h-fit">
                        <div className="flex items-center mb-5">
                            <div className="h-10 w-10 xl:h-14 xl:w-14 2xl:h-20 2xl:w-20 bg-[#d2f7ef] rounded-md mr-5 bg-contain bg-[url('/images/icons/stethoscope.png')]"></div>
                            <div>Checkup & Diagnosis</div>
                        </div>                        
                        <div className="flex items-center mb-5">
                            <div className="h-10 w-10 xl:h-14 xl:w-14 2xl:h-20 2xl:w-20 bg-[#d2f7ef] rounded-md mr-5 bg-contain bg-[url('/images/icons/xray.png')]"></div>
                            <div>X-Ray (IOPA)</div>
                        </div>                        
                        <div className="flex items-center mb-5">
                            <div className="h-10 w-10 xl:h-14 xl:w-14 2xl:h-20 2xl:w-20 bg-[#d2f7ef] rounded-md mr-5 bg-contain bg-[url('/images/icons/periodontic.png')]"></div>
                            <div>Periodontic Treatment</div>
                        </div>                        
                        <div className="flex items-center mb-5">
                            <div className="h-10 w-10 xl:h-14 xl:w-14 2xl:h-20 2xl:w-20 bg-[#d2f7ef] rounded-md mr-5 bg-contain bg-[url('/images/icons/endodontic.png')]"></div>
                            <div>Endodontic Treatment</div>
                        </div>                        
                        <div className="flex items-center mb-5">
                            <div className="h-10 w-10 xl:h-14 xl:w-14 2xl:h-20 2xl:w-20 bg-[#d2f7ef] rounded-md mr-5 bg-contain bg-[url('/images/icons/prosthodontic.png')]"></div>
                            <div>Prosthodontic Treatment</div>
                        </div>                        
                        <div className="flex items-center mb-5">
                            <div className="h-10 w-10 xl:h-14 xl:w-14 2xl:h-20 2xl:w-20 bg-[#d2f7ef] rounded-md mr-5 bg-contain bg-[url('/images/icons/pedodontic.png')]"></div>
                            <div>Pedodontic Treatment</div>
                        </div>                        
                        <div className="flex items-center mb-5">
                            <div className="h-10 w-10 xl:h-14 xl:w-14 2xl:h-20 2xl:w-20 bg-[#d2f7ef] rounded-md mr-5 bg-contain bg-[url('/images/icons/face.png')]"></div>
                            <div>Oral & Maxillofacial Surgery</div>
                        </div>                        
                        <div className="flex items-center mb-5">
                            <div className="h-10 w-10 xl:h-14 xl:w-14 2xl:h-20 2xl:w-20 bg-[#d2f7ef] rounded-md mr-5 bg-contain bg-[url('/images/icons/orthodontic.png')]"></div>
                            <div>Orthodontic Treatment</div>
                        </div>                        
                        <div className="flex items-center mb-5">
                            <div className="h-10 w-10 xl:h-14 xl:w-14 2xl:h-20 2xl:w-20 bg-[#d2f7ef] rounded-md mr-5 bg-contain bg-[url('/images/icons/jewel.png')]"></div>
                            <div>Cosmetic Treatment</div>
                        </div>                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatWeDo
