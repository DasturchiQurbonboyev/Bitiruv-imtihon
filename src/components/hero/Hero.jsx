import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Hero.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import hero from '../../assets/hero/hero.png'


export default function Hero() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className="pt-[100px]">

            <div className='kontaine max-w-[1714px] bg-[#F2F2F2] mx-auto rounded-[50px] '>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper kontainer"
                >
                    <SwiperSlide className='bg-[#F2F2F2]'>
                        <div className=' bg-[#F2F2F2]   rounded-[50px]'>
                            <div className=' bg-inherit bg-[#F2F2F2]'>
                                <div className='grid justify-center gap-8 grid-cols-2 py-10'>
                                    <div className=' text-start'>
                                        <h3 className='font-[700] text-start max-w-[588px] text-[54px]'>Скидка 15%на все подвесные светильники</h3>
                                        <p className=" text-start bg-[#454545] inline-block text-white px-[35px] py-[15px] rounded-[100px] text-[54px] font-[700] ">
                                            до 5 февраля
                                        </p>
                                    </div>
                                    <div>
                                        <img src={hero} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[#F2F2F2]'>
                        <div className=' bg-[#F2F2F2]   rounded-[50px]'>
                            <div className=' bg-inherit bg-[#F2F2F2]'>
                                <div className='grid justify-center gap-8 grid-cols-2 py-10'>
                                    <div className=' text-start'>
                                        <h3 className='font-[700] text-start max-w-[588px] text-[54px]'>Скидка 15%на все подвесные светильники</h3>
                                        <p className=" text-start bg-[#454545] inline-block text-white px-[35px] py-[15px] rounded-[100px] text-[54px] font-[700] ">
                                            до 5 февраля
                                        </p>
                                    </div>
                                    <div className='flex justify-end'>
                                        <img src={hero} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[#F2F2F2]'>
                        <div className=' bg-[#F2F2F2]   rounded-[50px]'>
                            <div className=' bg-inherit bg-[#F2F2F2]'>
                                <div className='grid justify-center gap-8 grid-cols-2 py-10'>
                                    <div className=' text-start'>
                                        <h3 className='font-[700] text-start max-w-[588px] text-[54px]'>Скидка 15%на все подвесные светильники</h3>
                                        <p className=" text-start bg-[#454545] inline-block text-white px-[35px] py-[15px] rounded-[100px] text-[54px] font-[700] ">
                                            до 5 февраля
                                        </p>
                                    </div>
                                    <div>
                                        <img src={hero} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[#F2F2F2]'>
                        <div className=' bg-[#F2F2F2]   rounded-[50px]'>
                            <div className=' bg-inherit bg-[#F2F2F2]'>
                                <div className='grid justify-center gap-8 grid-cols-2 py-10'>
                                    <div className=' text-start'>
                                        <h3 className='font-[700] text-start max-w-[588px] text-[54px]'>Скидка 15%на все подвесные светильники</h3>
                                        <p className=" text-start bg-[#454545] inline-block text-white px-[35px] py-[15px] rounded-[100px] text-[54px] font-[700] ">
                                            до 5 февраля
                                        </p>
                                    </div>
                                    <div>
                                        <img src={hero} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[#F2F2F2]'>
                        <div className=' bg-[#F2F2F2]   rounded-[50px]'>
                            <div className=' bg-inherit bg-[#F2F2F2]'>
                                <div className='grid justify-center gap-8 grid-cols-2 py-10'>
                                    <div className=' text-start'>
                                        <h3 className='font-[700] text-start max-w-[588px] text-[54px]'>Скидка 15%на все подвесные светильники</h3>
                                        <p className=" text-start bg-[#454545] inline-block text-white px-[35px] py-[15px] rounded-[100px] text-[54px] font-[700] ">
                                            до 5 февраля
                                        </p>
                                    </div>
                                    <div>
                                        <img src={hero} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[#F2F2F2]'>
                        <div className=' bg-[#F2F2F2]   rounded-[50px]'>
                            <div className=' bg-inherit bg-[#F2F2F2]'>
                                <div className='grid justify-center gap-8 grid-cols-2 py-10'>
                                    <div className=' text-start'>
                                        <h3 className='font-[700] text-start max-w-[588px] text-[54px]'>Скидка 15%на все подвесные светильники</h3>
                                        <p className=" text-start bg-[#454545] inline-block text-white px-[35px] py-[15px] rounded-[100px] text-[54px] font-[700] ">
                                            до 5 февраля
                                        </p>
                                    </div>
                                    <div>
                                        <img src={hero} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide>Slide 2</SwiperSlide> */}
                    {/* <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide> */}
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </div>
    );
}                     
