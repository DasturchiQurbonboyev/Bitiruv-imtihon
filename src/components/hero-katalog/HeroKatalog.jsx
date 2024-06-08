import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import buttonimg from '../../assets/hero/buttonimg.png'
import katalog1 from '../../assets/katalog/katalog1.png'
import katalog2 from '../../assets/katalog/katalog2.png'
import katalog3 from '../../assets/katalog/katalog3.png'
import katalog4 from '../../assets/katalog/katalog4.png'
import katalog5 from '../../assets/katalog/katalog5.png'
import katalog6 from '../../assets/katalog/katalog6.png'
import katalog7 from '../../assets/katalog/katalog7.png'
import katalog8 from '../../assets/katalog/katalog8.png'
import katalog9 from '../../assets/katalog/katalog9.png'
import katalog10 from '../../assets/katalog/katalog10.png'
import katalog11 from '../../assets/katalog/katalog11.png'
import { Link } from 'react-router-dom'

import 'swiper/css';
import 'swiper/css/pagination';
import './KatalogSwiper.css';
import { Pagination } from 'swiper/modules'

const HeroKatalog = ({ klass, count }) => {


    let katalogs = [
        {
            img: katalog1,
            title: "Люстры",
            price: "От 540₽",
            with: ""
        },
        {
            img: katalog2,
            title: "Светильники",
            price: "От 540₽",
            with: ""
        },
        {
            img: katalog3,
            title: "Бра",
            price: "От 540₽",
            with: ""
        },
        {
            img: katalog4,
            title: "Торшеры",
            price: "От 540₽",
            with: ""
        },
        {
            img: katalog5,
            title: "Настольные лампы",
            price: "От 540₽",
            with: ""
        },
        {
            img: katalog6,
            title: "Споты",
            price: "От 540₽",
            with: ""
        },
        {
            img: katalog7,
            title: "Споты",
            price: "От 540₽",
            with: ""
        },
        {
            img: katalog8,
            title: "Споты",
            price: "От 540₽",
            with: ""
        },
        {
            img: katalog9,
            title: "Споты",
            price: "От 540₽",
            with: ""
        },
        {
            img: katalog10,
            title: "Споты",
            price: "От 540₽",
            with: "h-[200px]"
        },
        {
            img: katalog11,
            title: "Споты",
            price: "От 540₽",
            with: "h-[200px]"
        },
    ]

    return (
        <div className='pt-[102px] '>
            <div className='kontainer '>
                <div className={`${klass} flex justify-between items-center   `}>
                    <h2 className='text-[#454545] text-[40px] font-[700]     '>Каталог</h2>
                    <Link className='katalog__btn' to={"/katalog"}>
                        <div className='border rounded-[100px] px-[48px] py-[14px] flex items-center gap-[10px]'>
                            <p className='text-[#454545] text-[16px] font-[500]   '>Весь каталог</p>
                            <img src={buttonimg} alt="" />
                        </div>
                    </Link>
                </div>

                <div className='katalog gap-5'>
                    {
                        katalogs.slice(0, count)?.map((el, inx) => (
                            <div key={inx} className={`   px-4 py-[10px] gap-[70px] flex-grow min-[520px]:h-[280px]  max-h-[280px] rounded-[20px]   bg-[#F2F2F2]`}>
                                <div className='min-[690px]:-mb-[25px] '>
                                    <p className='text-[20px]  font-[500] text-[#454545] '>{el.title}</p>
                                </div>
                                <div className={`${el.with} text-end flex  justify-end  max-h-[200px]  h-full`}>
                                    <img className={`min-[280]:h-[150px]   min-[520px]:${el.with}  object-contain `} src={el.img} alt="" />
                                </div>
                                <div className='flex min-[690px]:-mt-[25px]  items-center gap-[11px]'>
                                    <p className='text-[14px]  font-[500] text-[#454545]'>{el.price}</p>
                                    <img src={buttonimg} alt="button" />
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className=' media__katalog'>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <div >
                            {
                                katalogs.slice(0, count)?.map((el, inx) => (
                                    <SwiperSlide key={inx}>
                                        <div className={`p-5  flex justify-between  flex-col py-4 flex-grow  h-[280px] rounded-[20px]   bg-[#F2F2F2]`}>
                                            <div className=' '>
                                                <p className='text-[15px] text-start  font-[500] text-[#454545] '>{el.title}</p>
                                            </div>
                                            <div className={`h-[150px]`}>
                                                <img className={`min-[280]:h-[150px]   min-[520px]:${el.with}  object-contain `} src={el.img} alt="" />
                                            </div>
                                            <div className='flex   items-center gap-[11px]'>
                                                <p className='text-[14px]  font-[500] text-[#454545]'>{el.price}</p>
                                                <div>
                                                    <img className='w-[15px]' src={buttonimg} alt="button" />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide >
                                ))
                            }
                        </div >
                    </Swiper >
                    <Link className='katalog__btn1' to={"/katalog"}>
                        <div className='mt-[32px] border rounded-[100px] px-[48px] py-[14px] flex justify-center items-center gap-[10px]'>
                            <p className='text-[#454545] text-[16px] font-[500]   '>Весь каталог</p>
                            <img src={buttonimg} alt="" />
                        </div>
                    </Link>
                </div >
                <div className=' media__katalog1 mt-[32px]'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <div className='' >
                            {
                                katalogs.slice(0, count)?.map((el, inx) => (
                                    <SwiperSlide key={inx}>
                                        <div className={`p-5  grid justify-center grid-rows-3 py-4 w-[280px]  h-[300px] rounded-[20px]   bg-[#F2F2F2]`}>
                                            <div className=' '>
                                                <p className='text-[15px] text-start  font-[500] text-[#454545] '>{el.title}</p>
                                            </div>
                                            <div className={""}>
                                                <img className={`  `} src={el.img} alt="" />
                                            </div>
                                            <div className='flex   items-center gap-[11px]'>
                                                <p className='text-[14px]  font-[500] text-[#454545]'>{el.price}</p>
                                                <div >
                                                    <img className='' src={buttonimg} alt="button" />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide >
                                ))
                            }
                        </div >
                    </Swiper >
                    <Link className='' to={"/katalog"}>
                        <div className='mt-[32px] border rounded-[100px] px-[48px] py-[14px] flex justify-center items-center gap-[10px]'>
                            <p className='text-[#454545] text-[16px] font-[500]   '>Весь каталог</p>
                            <img src={buttonimg} alt="" />
                        </div>
                    </Link>
                </div >
            </div >

        </div >
    )
}

export default HeroKatalog