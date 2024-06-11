import React, { useEffect, useState } from 'react'
import img1 from '../../assets/brend/1.png'
import img2 from '../../assets/brend/2.png'
import img3 from '../../assets/brend/3.png'
import img4 from '../../assets/brend/4.png'
import buttonimg from '../../assets/hero/buttonimg.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Brend.css'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const Brend = () => {

    const [swiperRef, setSwiperRef] = useState(null);

    let brends = [
        {
            img: img1
        },
        {
            img: img2
        },
        {
            img: img3
        },
        {
            img: img4
        },
        {
            img: img1
        },
        {
            img: img2
        },
        {
            img: img3
        },
        {
            img: img4
        },
    ]
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (

        <div className='kontainer'>
            <div className='brend__title'>
                <div className='flex items-center justify-between pb-[40px]'>
                    <h2 className='text-[#454545] text-[28px] md:text-[40px] font-[700] '>
                        Только проверенные бренды
                    </h2>

                </div>
                <div className=''>
                    <Swiper
                        onSwiper={setSwiperRef}
                        slidesPerView={screenWidth > 800 ? 4 : (screenWidth <= 800 ? 3 : (screenWidth < 600 ? 2 : screenWidth < 500 ? 1 : 1))}
                        centeredSlides={true}
                        spaceBetween={30}
                        pagination={{
                            type: 'fraction',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            brends?.map((el, inx) => (
                                <SwiperSlide key={inx}>
                                    <div>
                                        <img src={el.img} alt="" />
                                    </div>
                                </SwiperSlide>
                            ))

                        }

                    </Swiper>

                </div>
            </div>
        </div>
    )
}

export default Brend