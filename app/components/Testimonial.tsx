"use client"

import Image from "next/image";
import {Navigation} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

function Testimonial() {
    return (
        <div className="bg-gradient-to-b from-[#d4f7f0] to-[#e8f7fd] px-10 py-10 md:px-20 xl:px-44 text-[#112222]">

            <h1 className="font-black text-2xl mb-10 xl:text-4xl">Testimonials</h1>
            <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides={true}
            centeredSlidesBounds={true}
            breakpoints={{
                769: {
                slidesPerView: 1.5,
                },  
                1280: {
                slidesPerView: 2.5,
                }   
            }}
            navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
            freeMode={true}
            >
                <SwiperSlide>
                    {/* Testimonial 1 */}
                    <div className="border-2 border-[#93ebda] rounded-xl h-fit w-full bg-white p-5 cursor-pointer">
                        <div className="flex gap-4 items-start">
                            <Image
                                src={'/images/photoshoot/testimonial.jpg'}
                                alt="Profile Picture"
                                height={35}
                                width={35}
                                className="rounded-full object-cover h-12 w-12"
                                />
                            <div>
                                <p className="text-sm">Laxman Upreti</p>
                                <p className="text-xs">1 week ago</p>
                            </div>
                            <div className="flex">
                                <Image
                                    src={'/images/icons/gold-star.png'}
                                    alt="Gold Star"
                                    height={15}
                                    width={15}
                                    className="object-contain"
                                />
                                <Image
                                    src={'/images/icons/gold-star.png'}
                                    alt="Gold Star"
                                    height={15}
                                    width={15}
                                    className="object-contain"
                                />
                                <Image
                                    src={'/images/icons/gold-star.png'}
                                    alt="Gold Star"
                                    height={15}
                                    width={15}
                                    className="object-contain"
                                />
                                <Image
                                    src={'/images/icons/gold-star.png'}
                                    alt="Gold Star"
                                    height={15}
                                    width={15}
                                    className="object-contain"
                                />
                                <Image
                                    src={'/images/icons/gold-star.png'}
                                    alt="Gold Star"
                                    height={15}
                                    width={15}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-sm py-3">
                        The level of care and attention to detail at this clinic is outstanding. They make sure I’m comfortable during every visit, and my dental health has never been better.
                        </p>
                    </div>
                </SwiperSlide>              
                <SwiperSlide>
                    {/* Testimonial 2 */}
                    <div className="border-2 border-[#93ebda] rounded-xl h-fit w-full bg-white p-5 cursor-pointer">
                        <div className="flex gap-4 items-start">
                            <Image
                                src={'/images/photoshoot/testimonial.jpg'}
                                alt="Profile Picture"
                                height={35}
                                width={35}
                                className="rounded-full object-cover h-12 w-12"
                                />
                            <div>
                                <p className="text-sm">Laxmi Shrestha</p>
                                <p className="text-xs">1 week ago</p>
                            </div>
                            <div className="flex">
                                <Image
                                    src={'/images/icons/gold-star.png'}
                                    alt="Gold Star"
                                    height={15}
                                    width={15}
                                    className="object-contain"
                                />
                                <Image
                                    src={'/images/icons/gold-star.png'}
                                    alt="Gold Star"
                                    height={15}
                                    width={15}
                                    className="object-contain"
                                />
                                <Image
                                    src={'/images/icons/gold-star.png'}
                                    alt="Gold Star"
                                    height={15}
                                    width={15}
                                    className="object-contain"
                                />
                                <Image
                                    src={'/images/icons/gold-star.png'}
                                    alt="Gold Star"
                                    height={15}
                                    width={15}
                                    className="object-contain"
                                />
                                <Image
                                    src={'/images/icons/gray-star.png'}
                                    alt="Gray Star"
                                    height={15}
                                    width={15}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-sm py-3">
                        The level of care and attention to detail at this clinic is outstanding. They make sure I’m comfortable during every visit, and my dental health has never been better.
                        </p>
                    </div>
                </SwiperSlide>              
                <SwiperSlide>
                    {/* Testimonial 3 */}
                    <div className="border-2 border-[#93ebda] rounded-xl h-fit w-full bg-white p-5 cursor-pointer">
                        <div className="flex gap-4 items-start">
                            <Image
                                src={'/images/photoshoot/testimonial.jpg'}
                                alt="Profile Picture"
                                height={35}
                                width={35}
                                className="rounded-full object-cover h-12 w-12"
                                />
                            <div>
                                <p className="text-sm">Krishna Shah</p>
                                <p className="text-xs">1 week ago</p>
                            </div>
                            <div className="flex">
                                <Image
                                    src={'/images/icons/gold-star.png'}
                                    alt="Gold Star"
                                    height={15}
                                    width={15}
                                    className="object-contain"
                                />
                                <Image
                                    src={'/images/icons/gold-star.png'}
                                    alt="Gold Star"
                                    height={15}
                                    width={15}
                                    className="object-contain"
                                />
                                <Image
                                    src={'/images/icons/gold-star.png'}
                                    alt="Gold Star"
                                    height={15}
                                    width={15}
                                    className="object-contain"
                                />
                                <Image
                                    src={'/images/icons/gray-star.png'}
                                    alt="Gray Star"
                                    height={15}
                                    width={15}
                                    className="object-contain"
                                />
                                <Image
                                    src={'/images/icons/gray-star.png'}
                                    alt="Gray Star"
                                    height={15}
                                    width={15}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-sm py-3">
                        The level of care and attention to detail at this clinic is outstanding. They make sure I’m comfortable during every visit, and my dental health has never been better.
                        </p>
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
    );
}

export default Testimonial;