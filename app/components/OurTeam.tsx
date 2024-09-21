'use client'
import Image from 'next/image'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

function OurTeam() {
    return (
        <>
            <div className="w-full px-10 xl:pl-44 lg:pl-20 md:pl-20 py-10 text-[#112222] bg-gradient-to-b from-[#def8f2] to-[#e8f7fd]">
                <h1 className="font-black text-2xl mb-10 xl:text-4xl">
                    Our Team
                </h1>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1.5}
                    breakpoints={{
                        481: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                    }}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                    freeMode={true}
                >
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                </Swiper>

                <div className="flex gap-4 mt-10">
                    <div className="swiper-button-prev ">
                        <Image
                            src={'/images/icons/arrow.png'}
                            alt="Arrow Left"
                            height={30}
                            width={30}
                        />
                    </div>
                    <div className="swiper-button-next ">
                        <Image
                            src={'/images/icons/arrow.png'}
                            alt="Arrow Right"
                            height={30}
                            width={30}
                            className="transform scale-x-[-1]"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurTeam
