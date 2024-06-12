import React, { useEffect } from 'react'
import cart from '../../assets/hero/cart.png'
import product from '../../assets/hero/product.png'
import './Wishlist.css'
import { useDispatch, useSelector } from 'react-redux'
import { FaHeart } from 'react-icons/fa'
import { toggleWishlist } from '../../context/slice/wishlistSlice'
import { addToCart } from '../../context/slice/cartSlice'
import Empty from '../empty/Empty'
import { toast } from 'react-toastify'


const Wishlist = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const wishes = useSelector(state => state.wishlist.value)
    const dispatch = useDispatch()


    if (wishes?.length > 0) {
        return (
            <div className=''>
                <div className='kontainer'>
                    <div>
                        <p className='wishlist__title'>Избранные товары <sup>{wishes.length}</sup></p>
                    </div>
                    <div className='products__list pt-14 flex gap-5 flex-wrap justify-center'>
                        {
                            wishes?.map((el, inx) => (
                                <div key={inx} className='w-[280px] border px-[16px] py-[28px]'>
                                    <div className='relative flex justify-center items-center mb-[32px]'>
                                        <div className='absolute top-0 right-2'>
                                            <FaHeart onClick={() => dispatch(toggleWishlist(el))} className='cursor-pointer size-6' />
                                        </div>
                                        <img className='product__img' src={product} alt="" />

                                    </div>
                                    <h5 className='mb-[20px] text-[#454545] text-[20px] leading-[22px] font-[500]    '>{el.title}</h5>
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <p>
                                                <del className='text-[#9F9F9F] text-[12px]'>
                                                    {el.price + 50}₽
                                                </del>
                                            </p>
                                            <p className='text-[#454545] text-[20px] leading-[22px] font-[700]'>
                                                {el.price}₽
                                            </p>
                                        </div>
                                        <div className='cursor-pointer' onClick={() => {
                                            toast.success("Add to Cart"),
                                                dispatch(addToCart(el))
                                        }}>
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