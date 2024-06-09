import React from 'react'
import buttonimg from '../../assets/hero/buttonimg.png'
import cart from '../../assets/hero/cart.png'
import product from '../../assets/hero/product.png'
import './Products.css'

const Products = () => {
    return (
        <div className='pt-[50px]'>
            <div className='kontainer'>
                <div className='product__title__btn '>
                    <h2 className=' product__title  '>
                        Популярные товары
                    </h2>
                    <div className=' more__product__btn'>
                        <p className='text-[#454545] text-[16px] font-[500]   '>Все товары</p>
                        <img src={buttonimg} alt="button" />
                    </div>
                    <div className='product__category__select'>
                        <select name="" id="" className=''>
                            <option value="">Светильники</option>
                            <option value="">Люстры</option>
                            <option value="">Лампы</option>
                            <option value="">Настольные лампы</option>
                            <option value="">Ночники</option>
                            <option value="">Подстветка</option>
                            <option value="">Уличное освещение</option>
                            <option value="">Мебельные установки</option>
                        </select>
                    </div>
                </div>

                <div className='bg-[#F2F2F2] product__category__item px-[25px] py-[11px] rounded-[100px]'>
                    <ul className='flex justify-between gap-5'>
                        <li className='text-[#454545] text-[16px] font-[600] leading-[21.86px]'>Светильники</li>
                        <li className='text-[#454545] text-[16px] font-[600] leading-[21.86px]'>Люстры</li>
                        <li className='text-[#454545] text-[16px] font-[600] leading-[21.86px]'>Лампы</li>
                        <li className='text-[#454545] text-[16px] font-[600] leading-[21.86px]'>Настольные лампы</li>
                        <li className='text-[#454545] text-[16px] font-[600] leading-[21.86px]'>Ночники</li>
                        <li className='text-[#454545] text-[16px] font-[600] leading-[21.86px]'>Подстветка</li>
                        <li className='text-[#454545] text-[16px] font-[600] leading-[21.86px]'>Уличное освещение</li>
                        <li className='text-[#454545] text-[16px] font-[600] leading-[21.86px]'>Мебельные установки</li>
                    </ul>
                </div>


                <div className='product pt-[50px]'>
                    <div className='max-w-[320px] border px-[16px] py-[28px]'>
                        <div className='flex justify-center items-center mb-[32px]'>
                            <img className='product__img' src={product} alt="" />

                        </div>
                        <h5 className='mb-[20px] text-[#454545] text-[20px] leading-[22px] font-[500]    '>Встраиваемый светильник Novotech</h5>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p>
                                    <del className='text-[#9F9F9F] text-[12px]'>
                                        7 000₽
                                    </del>
                                </p>
                                <p className='text-[#454545] text-[20px] leading-[22px] font-[700]'>
                                    6 399₽
                                </p>
                            </div>
                            <div>
                                <img src={cart} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products