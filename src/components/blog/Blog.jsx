import React, { useEffect } from 'react'
import buttonimg from '../../assets/hero/buttonimg.png'
import blog1 from '../../assets/blog/blog1.png'
import blog2 from '../../assets/blog/blog2.png'
import blog3 from '../../assets/blog/blog3.png'
import more_bnt from '../../assets/blog/more_bnt.png'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './Blog.css';

import { Pagination } from 'swiper/modules';

const Blog = ({ count, hidden }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let blogs = [
        {
            title: "Как правильно освещать дом снаружи?",
            data: "01.01.2024",
            img: blog1
        },
        {
            title: "Как правильно освещать дом снаружи?",
            data: "01.01.2024",
            img: blog2
        },
        {
            title: "Как правильно освещать дом снаружи?",
            data: "01.01.2024",
            img: blog3
        },
        {
            title: "Как правильно освещать дом снаружи?",
            data: "01.01.2024",
            img: blog1
        },
        {
            title: "Как правильно освещать дом снаружи?",
            data: "01.01.2024",
            img: blog2
        },
        {
            title: "Как правильно освещать дом снаружи?",
            data: "01.01.2024",
            img: blog3
        },
    ]



    return (
        <div className='kontainer'>
            <div id='blog' className='pt-[50px]'>
                <div className={`${hidden} flex items-center justify-between pb-[40px]`}>
                    <h2 className='text-[#454545] text-[40px] font-[700] '>
                        Блог
                    </h2>
                    <Link className='blog__btn' to={"/blog"}>
                        <div className='border rounded-[100px] px-[48px] py-[14px] flex items-center gap-[10px]'>
                            <p className='text-[#454545] text-[16px] font-[500]   '>Перейти в блог</p>
                            <img src={buttonimg} alt="button" />
                        </div>
                    </Link>
                </div>
                <div className=' blog__Item '>
                    {
                        blogs.slice(count)?.map((el, inx) => (
                            <div key={inx} className='max-w-[420px]'>
                                <div>
                                    <img src={el.img} alt="" />
                                </div>
                                <div className='flex  justify-between items-start   mt-[30px] mb-6'>
                                    <p className='font-[700] text-[20px] leading-[26px] text-[#454545]  '>{el.title}</p>
                                    <img src={more_bnt} alt="" />
                                </div>
                                <div>
                                    <p className='text-[14px] text-[#454545] font-[500]   '>{el.data}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='blog__swiper'>
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                        {
                            blogs.slice(count)?.map((el, inx) => (
                                <SwiperSlide key={inx}>

                                    <div className='pb-[20px] max-w-[420px]'>
                                        <div>
                                            <img src={el.img} alt="" />
                                        </div>
                                        <div className='flex  justify-between items-start   mt-[30px] mb-6'>
                                            <p className='font-[700] text-[20px] leading-[26px] text-[#454545]  '>{el.title}</p>
                                            <div>
                                                <img src={more_bnt} alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-[14px] text-[#454545] font-[500]   '>{el.data}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <Link className={`${hidden} blog__btn1`} to={"/blog"}>
                        <div className='border rounded-[100px]  py-[14px] flex-grow flex justify-center items-center gap-[10px]'>
                            <p className='text-[#454545] text-[16px] font-[500]   '>Перейти в блог</p>
                            <img src={buttonimg} alt="button" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Blog