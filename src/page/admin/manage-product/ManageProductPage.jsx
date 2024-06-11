import React from 'react'
import product from '../../../assets/hero/product.png'

const ManageProductPage = () => {
    return (
        <div className=' '>
            <h2 className='text-[#454545] text-[28px] font-[500]'>
                Manage product
            </h2>

            <div className='mt-[43px]'>
                <div className='max-w-[240px] border px-[16px] py-[28px]'>
                    <div className='relative flex h-[150px]  mb-[10px]'>
                        <img className='object-contain mx-auto' src={product} alt={""} title={""} />
                    </div>
                    <h5 className='mb-[10px] text-[#454545] text-[20px] leading-[22px] font-[500]    '>Встраиваемый светильник Novotech</h5>
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
                        <div className='cursor-pointer'>
                            {/* <img src={ } alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageProductPage