import React from 'react'
import '../globals.css'

const page = () => {
  return (
      <>
        {/* Head Section  */}
        <div className="flex bg-gradient-to-b from-[#d4f7f0] to-[#e8f7fd] overflow-clip">
            <div className="w-full xl:w-[60%] 3xl:w-[40%] xl:pl-44 lg:ps-28 md:ps-20 ps-10 text-[#112222] xl:py-20 lg:py-12 md:py-10 py-7 ">
                <div className="font-[1000] xl:text-[3.5rem] text-2xl md:text-3xl lg:text-[2.2rem] leading-snug xl:leading-[4rem] tracking-wide xl:w-[35rem] lg:w-[20rem] w-[11rem] md:w-[20rem] ">
                    Services
                </div>

                <div className="xl:pt-6 pt-5 text-xs xl:text-lg lg:text-[13px] w-[10rem] xl:w-[38rem] md:w-[20rem] lg:w-[20rem] 3xl:text-xl leading-5 opacity-90">
                We offer a wide range of dental services tailored to meet your unique needs. Our experienced team utilizes the best technique to ensure you receive the highest quality care.
                </div>

            </div>
        </div>
          
        {/* Main Content  */}
        <div className='lg:my-20 my-12'>
            <h1 className="font-black text-2xl text-center xl:mb-20 mb-10 xl:text-4xl">
            All Services
            </h1>
            
            <div className='flex items-center justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mx-10'>
                <div className="flex items-center">
                    <div className="h-10 w-10 bg-primary rounded-md mr-5 bg-contain bg-[url('/images/icons/stethoscope.png')]"></div>
                        <div>Checkup & Diagnosis</div>
                    </div>                        
                    <div className="flex items-center">
                        <div className="h-10 w-10 bg-primary rounded-md mr-5 bg-contain bg-[url('/images/icons/xray.png')]"></div>
                        <div>X-Ray (IOPA)</div>
                    </div>                        
                    <div className="flex items-center">
                        <div className="h-10 w-10 bg-primary rounded-md mr-5 bg-contain bg-[url('/images/icons/periodontic.png')]"></div>
                        <div>Periodontic Treatment</div>
                    </div>                        
                    <div className="flex items-center">
                        <div className="h-10 w-10 bg-primary rounded-md mr-5 bg-contain bg-[url('/images/icons/endodontic.png')]"></div>
                        <div>Endodontic Treatment</div>
                    </div>                        
                    <div className="flex items-center">
                        <div className="h-10 w-10 bg-primary rounded-md mr-5 bg-contain bg-[url('/images/icons/prosthodontic.png')]"></div>
                        <div>Prosthodontic Treatment</div>
                    </div>                        
                    <div className="flex items-center">
                        <div className="h-10 w-10 bg-primary rounded-md mr-5 bg-contain bg-[url('/images/icons/pedodontic.png')]"></div>
                        <div>Pedodontic Treatment</div>
                    </div>                        
                    <div className="flex items-center">
                        <div className="h-10 w-10 bg-primary rounded-md mr-5 bg-contain bg-[url('/images/icons/face.png')]"></div>
                        <div>Oral & Maxillofacial Surgery</div>
                    </div>                        
                    <div className="flex items-center">
                        <div className="h-10 w-10 bg-primary rounded-md mr-5 bg-contain bg-[url('/images/icons/orthodontic.png')]"></div>
                        <div>Orthodontic Treatment</div>
                    </div>                        
                    <div className="flex items-center">
                        <div className="h-10 w-10 bg-primary rounded-md mr-5 bg-contain bg-[url('/images/icons/jewel.png')]"></div>
                        <div>Cosmetic Treatment</div>
                    </div> 
                </div>
            </div>
        </div>
          
      </>
  )
}

export default page