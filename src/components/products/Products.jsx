import React, { useState } from 'react'
import buttonimg from '../../assets/hero/buttonimg.png'
import cart from '../../assets/hero/cart.png'
import product from '../../assets/hero/product.png'
import './Products.css'
import { useGetProductsQuery } from '../../context/api/productsApi'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSingle } from '../../context/slice/singleSlice.js'
import { toggleWishlist } from '../../context/slice/wishlistSlice.js'
import { addToCart } from '../../context/slice/cartSlice.js'
import { toast } from 'react-toastify'
import Loading from '../loading/Loading.jsx'

const Products = () => {
    const [limit, setLimit] = useState(8);
    const { data, isLoading, isError } = useGetProductsQuery();
    const wishes = useSelector(state => state.wishlist.value)

    const handleSeeMore = () => {
        setLimit((prevLimit) => prevLimit + 8);
    };

    const dispatch = useDispatch();


    if (isLoading) return (
        <Loading />
    );

    return (
        <div className='pt-[50px]'>
            <div className='kontainer'>
                <div className='product__title__btn '>
                    <h2 className=' product__title  '>
                        Популярные товары
                    </h2>
                    <Link className='all__products__btn__top' to={"/products"}>
                        <div className=' more__product__btn'>
                            <p className='text-[#454545] text-[16px] font-[500]   '>Все товары</p>
                            <img src={buttonimg} alt="button" />
                        </div>
                    </Link>
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


                <div className='product flex flex-wrap justify-center lg:justify-between gap-4 pt-[50px]'>
                    {
                        data?.slice(0, limit)?.map(el => (

                            <div key={el.id} className='max-w-[280px] border px-[16px] py-[28px]'>
                                <div className='relative flex justify-center items-center mb-[32px]'>
                                    <div onClick={() => dispatch(toggleWishlist(el))} className='absolute top-0 right-0'>
                                        {
                                            wishes.some(w => w?.id === el.id) ?
                                                <FaHeart className='cursor-pointer' size={25} /> :
                                                <FaRegHeart className='cursor-pointer' size={25} />
                                        }
                                    </div>
                                    <Link to={"/single"}>
                                        <img onClick={() => dispatch(toggleSingle(el))} className='product__img' src={product} alt={el.title} title={el.title} />
                                    </Link>
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
                <Link className=' all__products__btn__bottom' to={"/products"}>
                    <div className='  border gap-4 flex items-center justify-center py-[14px] rounded-[100px] mt-[50px] '>
                        <p className='text-[#454545] text-[16px] font-[500]   '>Все товары</p>
                        <img src={buttonimg} alt="button" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Products
