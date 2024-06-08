import React from 'react'
import buttonimg from '../../assets/hero/buttonimg.png'
import night1 from '../../assets/nornlight/night1.png'
import night2 from '../../assets/nornlight/night2.png'
import night3 from '../../assets/nornlight/night3.png'
import night4 from '../../assets/nornlight/night4.png'
import { Link } from 'react-router-dom'
import './NornLight.css'

const NornLight = () => {


    let nights = [
        {
            img: night1,
            description: "Бренды, проверенные временем и качеством",
            title: "Только проверенные бренды"
        },
        {
            img: night2,
            description: "Ниже не будет нигде",
            title: "Самые низкие цены"
        },
        {
            img: night3,
            description: "Доставляем по всей РФза 1-10 дней",
            title: "Быстрая доствка"
        },
        {
            img: night4,
            description: "Более 1000 товаров",
            title: "Большой ассортимент"
        },
    ]




    return (
        <div className='kontainer'>
            <div className='pt-[50px]'>
                <div className='flex items-center justify-between pb-[40px]'>
                    <h2 className='text-[#454545] text-[40px] font-[700] '>
                        Почему NORNLIGHT?
                    </h2>
                    {/* <Link> */}
                    <div className='night__bnt__top border rounded-[100px] px-[48px] py-[14px] flex items-center gap-[10px]'>
                        <p className='text-[#454545] text-[16px] font-[500]   '>О компании</p>
                        <img src={buttonimg} alt="button" />
                    </div>
                    {/* </Link> */}
                </div>
                <div className=' norn__light '>
                    {
                        nights?.map((el, inx) => (
                            <div key={inx} className=' norn__light__item  '>
                                <div className='w-[80px] h-[80px] bg-[#454545] flex justify-center items-center rounded-md mb-[40px] md:mb-[80px]'>
                                    <img src={el.img} alt="" />
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <h5 className='h-[52px] text-[#454545] text-[20px] font-[700] leading-[26px]'>{el.title}</h5>
                                    <p className='text-[#454545] text-[16px] font-[400] leading-[20.8px] mt-[20px]'>{el.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='night__bnt border rounded-[100px] px-[48px] py-[14px] flex items-center gap-[10px]'>
                    <p className='text-[#454545] text-[16px] font-[500]   '>О компании</p>
                    <img src={buttonimg} alt="button" />
                </div>
            </div>
        </div>
    )
}

export default NornLight