import React, { useEffect } from 'react'
import single from '../../assets/product/single.png'
import ok from '../../assets/product/ok.png'
import wastapp from '../../assets/product/wastapp.png'
import tg from '../../assets/product/tg.png'
import vk from '../../assets/product/vk.png'
import viber from '../../assets/product/viber.png'
import { FaRegHeart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import "./SingleComponent.css"

const SingleComponent = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const singleData = useSelector(state => state.single.value)[0]

    console.log(singleData);
    return (
        <div className='pt-[50px]'>
            <div className='kontainer'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div className='single__left'>
                        <img src={single} alt="" />
                    </div>
                    <div className='single__right'>
                        <h1 className='single__title'>
                            Встраиваемый светильник Novotech
                        </h1>
                        <div className='flex flex-col gap-3'>
                            <p className='single__sort'> Scott</p>
                            <div className='single__sort__item'>
                                <p className='single__sort'>Артикул : 7655-188</p>
                                <div className='flex gap-2'>
                                    <div className='bg-[#E5E5E5] hover:bg-[#4C4C4C] cursor-pointer w-[21px] h-[21px] flex justify-center items-center rounded-[50%]     '><img src={ok} alt="" /></div>
                                    <div className='bg-[#E5E5E5] hover:bg-[#4C4C4C] cursor-pointer w-[21px] h-[21px] flex justify-center items-center rounded-[50%]     '><img src={vk} alt="" /></div>
                                    <div className='bg-[#E5E5E5] hover:bg-[#4C4C4C] cursor-pointer w-[21px] h-[21px] flex justify-center items-center rounded-[50%]     '><img src={tg} alt="" /></div>
                                    <div className='bg-[#E5E5E5] hover:bg-[#4C4C4C] cursor-pointer w-[21px] h-[21px] flex justify-center items-center rounded-[50%]     '><img src={wastapp} alt="" /></div>
                                    <div className='bg-[#E5E5E5] hover:bg-[#4C4C4C] cursor-pointer w-[21px] h-[21px] flex justify-center items-center rounded-[50%]     '><img src={viber} alt="" /></div>
                                </div>
                            </div>
                            <p className='text-[#4D932C]'>В наличии</p>
                        </div>
                        <div>
                            <div className='single__price__item'>
                                <p className='single__price '>435 000 ₽</p>
                                <p className='single__old__price'>522 000 ₽</p>
                            </div>
                            <p className='single__description'>Профессиональный гоночный хардтейл для кросс-кантри уровня Чемпионата и Кубка Мира. Одна из самых легких рам среди гоночных хардтейлов для кросс-кантри.</p>
                            <div className='flex items-center gap-1 sm:gap-4 pt-[30px] lg:pt-[48px]'>
                                <div className='flex items-center'>
                                    <p className='w-[40px] bg-[#F8F8F8] justify-center flex items-center h-[52px]'>-</p>
                                    <p className='w-[40px] bg-[#F8F8F8] justify-center flex items-center h-[52px]'>1</p>
                                    <p className='w-[40px] bg-[#F8F8F8] justify-center flex items-center h-[52px]'>+</p>
                                </div>
                                <div>
                                    <button className='bg-[#454545] text-white py-[12px] sm:py-[16px] px-[10px]  md:px-[25px] lg:px-[50px] rounded-[10px]   '>В корзину</button>
                                </div>
                                <div className='bg-[#F8F8F8] flex items-center justify-center w-[52px] h-[52px] rounded-[10px]'>
                                    <FaRegHeart size={25} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleComponent