import React from 'react'
import img1 from '../../assets/brend/1.png'
import img2 from '../../assets/brend/2.png'
import img3 from '../../assets/brend/3.png'
import img4 from '../../assets/brend/4.png'
import buttonimg from '../../assets/hero/buttonimg.png'

const Brend = () => {
    return (
        <div className='kontainer'>
            <div>
                <div className='flex items-center justify-between pb-[40px]'>
                    <h2 className='text-[#454545] text-[40px] font-[700] '>
                        Только проверенные бренды
                    </h2>
                    <div className='border rounded-[100px] px-[48px] py-[14px] flex items-center gap-[10px]'>
                        <p className='text-[#454545] text-[16px] font-[500]   '>О компании</p>
                        <img src={buttonimg} alt="button" />
                    </div>
                </div>
                <div className='flex gap-5'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Brend