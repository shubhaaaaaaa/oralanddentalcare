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
                    Our Team
                </div>

                <div className="xl:pt-6 pt-5 text-xs xl:text-lg lg:text-[13px] w-[10rem] xl:w-[38rem] md:w-[20rem] lg:w-[20rem] 3xl:text-xl leading-5 opacity-90">
                We are proud to have a group of dedicated and experienced professionals who are passionate about providing exceptional dental care. Meet the people who make your smile their priority.
                </div>

            </div>
          </div>  

          {/* Main Content  */}
          <div className='lg:my-20 my-12'>
            <h1 className="font-black text-2xl text-center xl:mb-20 mb-10 xl:text-4xl">
                    Meet our Team
          </h1>
          <div className='flex items-center justify-center'>              
          <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-20 mx-10'>
            {/* Member 1 */}
            <div>
                <Image
                    src={'/images/photoshoot/team.jpg'}
                    alt="Team Member"
                    width={230}
                    height={100}
                    className="rounded-lg mb-5"
                />
                <p className="font-bold text-lg xl:text-xl">
                    Anima Shakya
                </p>
                <p className="text-sm xl:text-lg">
                    Dental Surgeon, POS Graduate
                </p>
                <p className="text-sm xl:text-lg">NMC No. 11478</p>
            </div>

            {/* Member 2 */}
            <div>
                <Image
                    src={'/images/photoshoot/team.jpg'}
                    alt="Team Member"
                    width={230}
                    height={100}
                    className="rounded-lg mb-5"
                />
                <p className="font-bold text-lg xl:text-xl">
                    Pranisha Bajracharya
                </p>
                <p className="text-sm xl:text-lg">Dental Surgeon</p>
                <p className="text-sm xl:text-lg">NMC No. 26315</p>
            </div>

            {/* Member 3 */}
            <div>
                <Image
                    src={'/images/photoshoot/team.jpg'}
                    alt="Team Member"
                    width={230}
                    height={100}
                    className="rounded-lg mb-5"
                />
                <p className="font-bold text-lg xl:text-xl">
                    Alina Rai
                </p>
                <p className="text-sm xl:text-lg">Pedodontics</p>
                <p className="text-sm xl:text-lg">NMC No. 10196</p>
            </div>

            {/* Member 4 */}
            <div>
                <Image
                    src={'/images/photoshoot/team.jpg'}
                    alt="Team Member"
                    width={230}
                    height={100}
                    className="rounded-lg mb-5"
                />
                <p className="font-bold text-lg xl:text-xl">
                    Manoj Adhikari
                </p>
                <p className="text-sm xl:text-lg">
                    Oral & Maxillofacial Surgeon
                </p>
                <p className="text-sm xl:text-lg">NMC No. 13380</p>
            </div>

            {/* Member 5 */}
            <div>
                <Image
                    src={'/images/photoshoot/team.jpg'}
                    alt="Team Member"
                    width={230}
                    height={100}
                    className="rounded-lg mb-5"
                />
                <p className="font-bold text-lg xl:text-xl">
                    Nabin Gosain
                </p>
                <p className="text-sm xl:text-lg">Orthodontist</p>
                <p className="text-sm xl:text-lg">NMC No. 14988</p>
            </div>

            {/* Member 6 */}
            <div>
                <Image
                    src={'/images/photoshoot/team.jpg'}
                    alt="Team Member"
                    width={230}
                    height={100}
                    className="rounded-lg mb-5"
                />
                <p className="font-bold text-lg xl:text-xl">
                    Sirish Chandra Regmi
                </p>
                <p className="text-sm xl:text-lg">Prosthodontist</p>
                <p className="text-sm xl:text-lg">NMC No. 13553</p>
            </div>
                      
          </div>
            </div>
        </div>
      </>
  )
}

export default page