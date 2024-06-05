import React from 'react'
import buttonimg from '../../assets/hero/buttonimg.png'
import blog1 from '../../assets/blog/blog1.png'
import more_bnt from '../../assets/blog/more_bnt.png'

const Blog = () => {
    return (
        <div className='kontainer'>
            <div className='pt-[50px]'>
                <div className='flex items-center justify-between pb-[40px]'>
                    <h2 className='text-[#454545] text-[40px] font-[700] '>
                        Блог
                    </h2>
                    <div className='border rounded-[100px] px-[48px] py-[14px] flex items-center gap-[10px]'>
                        <p className='text-[#454545] text-[16px] font-[500]   '>Перейти в блог</p>
                        <img src={buttonimg} alt="button" />
                    </div>
                </div>
                <div>
                    <div className='max-w-[420px]'>
                        <div>
                            <img src={blog1} alt="" />
                        </div>
                        <div className='flex  justify-between items-start   mt-[30px] mb-6'>
                            <h5>Как правильно освещать дом снаружи?</h5>
                            <img src={more_bnt} alt="" />
                        </div>
                        <div>
                            <p>01.01.2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog