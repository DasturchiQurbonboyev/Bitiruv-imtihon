import React, { useEffect, useState } from 'react'
import cart from '../../assets/hero/cart.png'
import product from '../../assets/hero/product.png'
import { useGetProductsQuery } from '../../context/api/productsApi'
import { FaRegHeart } from 'react-icons/fa'

const AllProducts = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const [limit, setLimit] = useState(16);
    const { data, isLoading, isError } = useGetProductsQuery();

    let arr = data?.length

    return (
        <div className='kontainer'>
            <div>
                <p className='text-[#454545] text-[28px] sm:text-[35px] md:text-[40px] font-[700] leading-[54.3px]    '>Популярные товары</p>
                <div className='product flex flex-wrap justify-center lg:justify-between gap-4 pt-[50px]'>
                    {
                        data?.slice(0, limit)?.map(el => (

                            <div key={el.id} className='max-w-[280px] border px-[16px] py-[28px]'>
                                <div className='relative flex justify-center items-center mb-[32px]'>
                                    <div className='absolute top-0 right-0'>
                                        <FaRegHeart className='cursor-pointer' size={26} />
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
                <div className=' flex justify-center mt-[50px]'>
                    <button onClick={() => setLimit(arr)} className='border px-[48px] py-[14px] rounded-[100px]'>Все товары</button>
                </div>
            </div>
        </div>
    )
}

export default AllProducts