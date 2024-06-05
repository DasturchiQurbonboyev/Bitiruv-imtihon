import React from 'react'
import buttonimg from '../../assets/hero/buttonimg.png'
import night1 from '../../assets/hero/night1.png'

const NornLight = () => {
    return (
        <div className='kontainer'>
            <div className='pt-[50px]'>
                <div className='flex items-center justify-between pb-[40px]'>
                    <h2 className='text-[#454545] text-[40px] font-[700] '>
                        Почему NORNLIGHT?
                    </h2>
                    <div className='border rounded-[100px] px-[48px] py-[14px] flex items-center gap-[10px]'>
                        <p className='text-[#454545] text-[16px] font-[500]   '>О компании</p>
                        <img src={buttonimg} alt="button" />
                    </div>
                </div>
                <div>
                    <div className='max-w-[310px] border  p-[40px] '>
                        <div className='w-[80px] h-[80px] bg-[#454545] flex justify-center items-center rounded-md mb-[80px]'>
                            <img src={night1} alt="" />
                        </div>
                        <div>
                            <h5 className='text-[#454545] text-[20px] font-[700] leading-[26px]'>Только проверенные бренды</h5>
                            <p className='text-[#454545] text-[16px] font-[400] leading-[20.8px] mt-[20px]'>Бренды, проверенные временем и качеством</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NornLight