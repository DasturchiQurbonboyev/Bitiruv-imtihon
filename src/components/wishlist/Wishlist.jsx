import React from 'react'
import cart from '../../assets/hero/cart.png'
import product from '../../assets/hero/product.png'
import './Wishlist.css'
import { useDispatch, useSelector } from 'react-redux'
import { FaHeart } from 'react-icons/fa'
import { toggleWishlist } from '../../context/slice/wishlistSlice'
import Empty from '../empty/Empty'


const Wishlist = () => {



    const wishes = useSelector(state => state.wishlist.value)
    console.log(wishes);
    const dispatch = useDispatch()


    if (wishes.length > 0) {
        return (
            <div className=''>
                <div className='kontainer'>
                    <div>
                        <p className='wishlist__title'>Избранные товары</p>
                    </div>
                    <div className='products__list pt-14'>
                        {
                            wishes?.map((el) => (
                                <div key={el.id} className='max-w-[320px] border px-[16px] py-[28px]'>
                                    <div className='relative flex justify-center items-center mb-[32px]'>
                                        <div className='absolute top-0 right-2'>
                                            <FaHeart onClick={() => dispatch(toggleWishlist(el))} className='cursor-pointer size-6' />
                                        </div>
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
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
    return (
        <Empty />
    )
}

export default Wishlist