import React, { useEffect } from 'react'
import single from '../../assets/product/single.png'
import ok from '../../assets/product/ok.png'
import wastapp from '../../assets/product/wastapp.png'
import tg from '../../assets/product/tg.png'
import vk from '../../assets/product/vk.png'
import viber from '../../assets/product/viber.png'
import Loading from '../loading/Loading'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import "./SingleComponent.css"
import { toggleWishlist } from '../../context/slice/wishlistSlice'
import { addToCart, incCart, decCart } from '../../context/slice/cartSlice';

const SingleComponent = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const dispatch = useDispatch()
    const singleData = useSelector(state => state.single.value)[0]
    const cartItems = useSelector(state => state.cart.value);
    const wishlist = useSelector((state) => state.wishlist.value);

    if (!singleData || !singleData.id) {
        return (
            <Loading />
        )
    }

    let exists = cartItems.some(item => item.id === singleData.id);

    let kart = cartItems.map((el) => {
        return el.id === singleData.id
    })

    let kartInx
    for (let i = 0; i < kart.length; i++) {
        kart[i] ? kartInx = i : ""
    }

    const handleWishlistToggle = () => {
        dispatch(toggleWishlist(singleData));
    };

    const handleAddToCart = () => {
        dispatch(addToCart(singleData));
    };

    return (
        <div className='pt-[50px]'>
            <div className='kontainer'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div className='single__left'>
                        <img src={single} alt="" />
                    </div>
                    <div className='single__right'>
                        <h1 className='single__title'>
                            {singleData.title}
                        </h1>
                        <div className='flex flex-col gap-3'>
                            <p className='single__sort'> Scott</p>
                            <div className='single__sort__item'>
                                <p className='single__sort'>Артикул : 7655-188</p>
                                <div className='flex gap-2'>
                                    <div className='bg-[#E5E5E5] hover:bg-[#4C4C4C] cursor-pointer w-[21px] h-[21px] flex justify-center items-center rounded-[50%]'><img src={ok} alt="" /></div>
                                    <div className='bg-[#E5E5E5] hover:bg-[#4C4C4C] cursor-pointer w-[21px] h-[21px] flex justify-center items-center rounded-[50%]'><img src={vk} alt="" /></div>
                                    <div className='bg-[#E5E5E5] hover:bg-[#4C4C4C] cursor-pointer w-[21px] h-[21px] flex justify-center items-center rounded-[50%]'><img src={tg} alt="" /></div>
                                    <div className='bg-[#E5E5E5] hover:bg-[#4C4C4C] cursor-pointer w-[21px] h-[21px] flex justify-center items-center rounded-[50%]'><img src={wastapp} alt="" /></div>
                                    <div className='bg-[#E5E5E5] hover:bg-[#4C4C4C] cursor-pointer w-[21px] h-[21px] flex justify-center items-center rounded-[50%]'><img src={viber} alt="" /></div>
                                </div>
                            </div>
                            <p className='text-[#4D932C]'>В наличии</p>
                        </div>
                        <div>
                            <div className='single__price__item'>
                                <p className='single__price '>{singleData.price * (kartInx ? cartItems[kartInx].quantity : 1)}₽</p>
                                <p className='single__old__price'>{singleData.price + 50} ₽</p>
                            </div>
                            <p className='single__description'>Профессиональный гоночный хардтейл для кросс-кантри уровня Чемпионата и Кубка Мира. Одна из самых легких рам среди гоночных хардтейлов для кросс-кантри.</p>
                            <div className='flex items-center justify-around gap-1 sm:gap-4 pt-[30px] lg:pt-[48px]'>
                                {
                                    exists ? (
                                        <div className='flex items-center'>
                                            <button disabled={(kartInx ? cartItems[kartInx].quantity : 1) <= 1} onClick={() => dispatch(decCart(cartItems[kartInx]))} className='w-[40px] bg-[#F8F8F8] justify-center flex items-center h-[52px]'>-</button>
                                            <p className='w-[40px] bg-[#F8F8F8] justify-center flex items-center h-[52px]'>{kartInx ? cartItems[kartInx].quantity : 1}</p>
                                            <button onClick={() => dispatch(incCart(cartItems[kartInx]))} className='w-[40px] bg-[#F8F8F8] justify-center flex items-center h-[52px]'>+</button>
                                        </div>
                                    ) :
                                        <></>
                                }
                                <div>
                                    <button onClick={handleAddToCart} className='bg-[#454545] text-white py-[12px] sm:py-[16px] px-[10px]  md:px-[25px] lg:px-[50px] rounded-[10px]'>В корзину</button>
                                </div>
                                <div onClick={handleWishlistToggle} className='cursor-pointer bg-[#F8F8F8] flex items-center justify-center w-[52px] h-[52px] rounded-[10px]'>
                                    {
                                        wishlist.some(w => w?.id === singleData.id) ?
                                            <FaHeart size={25} /> :
                                            <FaRegHeart size={25} />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-[40px]'>
                    <p className='harakteristika__title '>Характеристика</p>
                    <div className='harakteristika'>
                        <div>
                            <p>Цвет</p>
                            <p>Жёлтый </p>
                        </div>
                        <div>
                            <p>Год</p>
                            <p>2016</p>
                        </div>
                        <div>
                            <p>Диаметр колеса</p>
                            <p>27.5</p>
                        </div>
                        <div>
                            <p>Материал рамы</p>
                            <p>Карбон</p>
                        </div>
                        <div>
                            <p>Размер</p>
                            <p>L</p>
                        </div>
                        <div>
                            <p>Страна</p>
                            <p>Швейцария</p>
                        </div>
                        <div>
                            <p>Производитель</p>
                            <p>Scott</p>
                        </div>
                        <div>
                            <p>Покрышки</p>
                            <p>Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy / PaceStar compound</p>
                        </div>
                        <div>
                            <p>Рама</p>
                            <p>Scale Carbon / HMX-технология / технология IMP / Коническая  рулевая труба / BB92 / Технология SDS / Дропауты IDS SL</p>
                        </div>
                        <div>
                            <p>Подседельный Штырь</p>
                            <p>Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series: Carbon 2B SDS / 34.9mm</p>
                        </div>
                        <div>
                            <p>Седло</p>
                            <p>Ritchey WCS Streem V3 Titanium rails</p>
                        </div>
                        <div>
                            <p>Вилка</p>
                            <p>Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle / коническая рулевая труба / Удалённая блокировка, регулировка отскока / ход 100mm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleComponent
