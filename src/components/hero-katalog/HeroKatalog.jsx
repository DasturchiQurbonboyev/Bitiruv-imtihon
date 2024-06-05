import React from 'react'
import buttonimg from '../../assets/hero/buttonimg.png'
import katalog1 from '../../assets/hero/katalog1.png'

const HeroKatalog = () => {
    return (
        <div className='pt-[102px] '>
            <div className='kontainer'>
                <div className=' flex justify-between items-center   '>
                    <h2 className='text-[#454545] text-[40px] font-[700]     '>Каталог</h2>
                    <div className='border rounded-[100px] px-[48px] py-[14px] flex items-center gap-[10px]'>
                        <p className='text-[#454545] text-[16px] font-[500]   '>Весь каталог</p>
                        <img src={buttonimg} alt="" />
                    </div>
                </div>

                <div className='pt-10'>
                    <div className='  px-4 py-[10px] gap-[70px]  max-w-[380px] rounded-[20px] justify-center  bg-[#F2F2F2]'>
                        <div className='-mb-[25px] '>
                            <p className='text-[20px]  font-[500] text-[#454545] '>Люстры</p>
                        </div>
                        <div className='text-end flex justify-end'>
                            {/* <div> */}

                            <img src={katalog1} alt="" />
                            {/* </div> */}
                        </div>
                        <div className='flex -mt-[25px]  items-center gap-[11px]'>
                            <p className='text-[14px]  font-[500] text-[#454545]'>От 540₽ </p>
                            <img src={buttonimg} alt="button" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroKatalog