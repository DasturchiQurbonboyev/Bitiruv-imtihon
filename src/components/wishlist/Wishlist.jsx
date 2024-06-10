import React from 'react'
import cart from '../../assets/hero/cart.png'
import product from '../../assets/hero/product.png'
import './Wishlist.css'

const Wishlist = () => {
    return (
        <div className=''>
            <div className='kontainer'>
                <div>
                    <p className='wishlist__title'>Избранные товары</p>
                </div>
                <div className='products__list pt-14'>
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

export default Wishlist