import React from 'react'
import buttonimg from '../../assets/hero/buttonimg.png'
import katalog1 from '../../assets/katalog/katalog1.png'
import katalog2 from '../../assets/katalog/katalog2.png'
import katalog3 from '../../assets/katalog/katalog3.png'
import katalog4 from '../../assets/katalog/katalog4.png'
import katalog5 from '../../assets/katalog/katalog5.png'
import katalog6 from '../../assets/katalog/katalog6.png'

const HeroKatalog = () => {


    let katalogs = [
        {
            img: katalog1,
            title: "Люстры",
            price: "От 540₽"
        },
        {
            img: katalog2,
            title: "Светильники",
            price: "От 540₽"
        },
        {
            img: katalog3,
            title: "Бра",
            price: "От 540₽"
        },
        {
            img: katalog4,
            title: "Торшеры",
            price: "От 540₽"
        },
        {
            img: katalog5,
            title: "Настольные лампы",
            price: "От 540₽"
        },
        {
            img: katalog6,
            title: "Споты",
            price: "От 540₽"
        },
    ]

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

                <div className='pt-10 grid grid-cols-3 gap-5'>
                    {
                        katalogs?.map((el, inx) => (
                            <div className='  px-4 py-[10px] gap-[70px]  max-w-[380px] rounded-[20px] justify-center  bg-[#F2F2F2]'>
                                <div className='-mb-[25px] '>
                                    <p className='text-[20px]  font-[500] text-[#454545] '>{el.title}</p>
                                </div>
                                <div className='text-end flex max-h-[200px] h-full justify-end'>
                                    <img src={el.img} alt="" />
                                </div>
                                <div className='flex -mt-[25px]  items-center gap-[11px]'>
                                    <p className='text-[14px]  font-[500] text-[#454545]'>{el.price}</p>
                                    <img src={buttonimg} alt="button" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HeroKatalog