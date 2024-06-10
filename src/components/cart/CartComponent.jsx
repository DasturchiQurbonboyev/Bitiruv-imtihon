import React from 'react'
import productImg from '../../assets/product/cartImg.png'
import ptichka from '../../assets/product/ptichka.png'
import { RiDeleteBin5Line } from 'react-icons/ri'

const CartComponent = () => {
    return (
        <div className='kontainer'>
            <div className='bg-[#F2F2F2] px-[46px] py-[36px] rounded-[20px]'>
                <div className=' flex'>
                    <div className='w-[120px]'>
                        <p className='text-[#454545] text-[16px] font-[500]  '>Фото</p>
                    </div>
                    <div className='grid flex-grow grid-cols-4 gap-3 pb-[28px]'>
                        <div>
                            <p className='text-[#454545] text-[16px] font-[500]  '>Товары</p>
                        </div>
                        <div>
                            <p className='text-[#454545] text-[16px] font-[500]  '>Описание</p>
                        </div>
                        <div>
                            <p className='text-[#454545] text-[16px] font-[500]  '>Артикул</p>
                        </div>
                        <div>
                            <p className='text-[#454545] text-[16px] font-[500]  '>Количество</p>
                        </div>
                    </div>
                </div>
                <div className=' flex gap-9 pt-[20px] border-t-2 '>
                    <div className='w-[120px]'>
                        <div className='bg-white w-[80px] h-[80px] flex justify-center items-center rounded-[15px]'>
                            <img src={productImg} alt="" />
                        </div>
                    </div>
                    <div className='grid flex-grow grid-cols-4 gap-3'>
                        <div>
                            <p className='text-[#454545] text-[16px] font-[600]'>Встраиваемый светильник Novotech</p>
                            <p>6 399₽</p>
                        </div>
                        <div>
                            <p className='text-[#454545] text-[16px] font-[600]'>Светильник RADUGA COMBO XS Промышленное освещение; 50Вт; 230В; S4; XS;</p>
                        </div>
                        <div>
                            <p className='text-[#454545] text-[16px] font-[600]'>
                                RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS
                            </p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-5 items-center '>
                                <p>-</p>
                                <p className='w-[60px] h-[60px] border rounded-[10px] flex justify-center items-center'>1</p>
                                <p>+</p>
                            </div>
                            <div>
                                <RiDeleteBin5Line size={25} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-[20px] bg-[#F2F2F2] rounded-[20px] px-[46px] py-[36px]  '>
                <p className='text-[#454545] text-[32px] font-[700]    '>Оформление</p>
                <div className='grid grid-cols-3 gap-5 pt-[30px] pb-[37px] border-b-2'>
                    <input className='border-2 outline-none bg-inherit px-[20px] py-[14px] rounded-[100px] ' type="text" placeholder='ФИО' />
                    <input className='border-2 outline-none bg-inherit px-[20px] py-[14px] rounded-[100px] ' type="text" placeholder='телефон' />
                    <input className='border-2 outline-none bg-inherit px-[20px] py-[14px] rounded-[100px] ' type="email" placeholder='Электронная почта' />
                </div>
                <p className='text-[#454545] text-[32px] font-[700] mt-[37px]   '>Доставка</p>
                <div className='flex flex-col gap-[31px] pb-[50px] pt-[31px]'>
                    <input className='max-w-[780px] w-full border-2 outline-none bg-inherit px-[20px] py-[14px] rounded-[100px] ' type="text" placeholder='Адрес доставки' />
                    <textarea className='resize-none max-w-[780px] rounded-[26px] h-[150px] bg-inherit border  px-[20px] py-[14px]  ' placeholder='Комментарий' name="" id=""></textarea>
                </div>
            </div>

            <div className='mt-[20px] bg-[#F2F2F2] rounded-[20px] px-[46px] py-[36px]  '>
                <p className='text-[#454545] text-[32px] font-[700]    '>Оплата</p>
                <div className='flex gap-10 pt-8'>
                    <p className='text-[#454545] text-[16px] font-[600]'>Товары............................................. 12 300₽</p>
                    <p className='text-[#454545] text-[16px] font-[600]'>Доставка.............................................. 580₽</p>
                </div>

                <p className='pt-[69px] text-[#454545] text-[24px] font-[700]'>12 800₽</p>
                <div className='flex gap-6 items-center pt-[28px]'>
                    <button className='max-w-[324px] w-full bg-[#454545] py-[14px] rounded-[100px] text-white  '>Купить</button>
                    <div className='flex items-center gap-1'>
                        <div className='w-[16px] h-[16px] rounded-[50%] border border-[#454545] flex justify-center items-center'>
                            <img src={ptichka} alt="" />
                        </div>
                        <p>Я согласен наобработку моих персональных данных</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartComponent