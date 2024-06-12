import React from 'react'
import edit from '../../../assets/admin/editblack.png'
import product from '../../../assets/hero/product.png'
import { RiDeleteBin6Line } from 'react-icons/ri'

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
                    <div className='flex justify-between items-end'>
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
                        <div className='flex items-center gap-[10px]'>
                            <div className='cursor-pointer border px-[16px] py-[6px] rounded-[100px]   '>
                                <img src={edit} alt="" />
                            </div>
                            <div className='bg-[#454545] cursor-pointer  px-[16px] py-[6px] rounded-[100px]   '>
                                <RiDeleteBin6Line size={25} color='white' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageProductPage