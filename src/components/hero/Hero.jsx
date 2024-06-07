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


    let heroSwiger = [
        {
            description: "Скидка 15%на все подвесные светильники",
            title: "до 5 февраля",
            img: hero
        },
        {
            description: "Скидка 15%на все подвесные светильники",
            title: "до 5 февраля",
            img: hero
        },
        {
            description: "Скидка 15%на все подвесные светильники",
            title: "до 5 февраля",
            img: hero
        },
        {
            description: "Скидка 15%на все подвесные светильники",
            title: "до 5 февраля",
            img: hero
        },
        {
            description: "Скидка 15%на все подвесные светильники",
            title: "до 5 февраля",
            img: hero
        },
        {
            description: "Скидка 15%на все подвесные светильники",
            title: "до 5 февраля",
            img: hero
        },
        {
            description: "Скидка 15%на все подвесные светильники",
            title: "до 5 февраля",
            img: hero
        },
        {
            description: "Скидка 15%на все подвесные светильники",
            title: "до 5 февраля",
            img: hero
        },

        {
            description: "Скидка 15%на все подвесные светильники",
            title: "до 5 февраля",
            img: hero
        },
        {
            description: "Скидка 15%на все подвесные светильники",
            title: "до 5 февраля",
            img: hero
        },
        {
            description: "Скидка 15%на все подвесные светильники",
            title: "до 5 февраля",
            img: hero
        },
    ]


    return (
        <div className="pt-[100px]">

            <div className='kontaine max-w-[1714px] bg-[#F2F2F2]  mx-auto rounded-[60px] '>
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
                    {
                        heroSwiger?.map((el, inx) => (
                            <SwiperSlide key={inx} className='rounded-[50px] bg-[#F2F2F2]'>
                                <div className=' bg-[#F2F2F2]   rounded-[50px]'>
                                    <div className=' bg-inherit bg-[#F2F2F2]'>
                                        <div className='min-[990px]:grid max-[990px]:flex flex-col-reverse  justify-center rounded-[50px] gap-8 grid-cols-2 mt-[40px]'>
                                            <div className=' text-start'>
                                                <h3 className='font-[700] text-start max-w-[588px] text-[54px]'>{el.description}</h3>
                                                <p className=" text-start bg-[#454545] inline-block text-white px-[35px] py-[15px] rounded-[100px] text-[54px] font-[700] ">
                                                    {el.title}
                                                </p>
                                            </div>
                                            <div>
                                                <img src={el.img} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
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
