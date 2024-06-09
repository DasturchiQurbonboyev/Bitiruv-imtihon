import React from 'react'

const AboutComponent = () => {
    return (
        <div>
            <div className='kontainer'>
                <p className='text-[#454545]  mb-4 text-[35px] md:text-[50px] lg:text-[64px] font-[700] leading-[70.4px]    '>О компании</p>
                <div className='grid md:grid-cols-2 gap-8 '>
                    <div className='md:grid items-center flex-grow flex flex-col  md:justify-normal gap-5'>
                        <div className='gap-[60px] md:gap-[83px] w-full grid max-w-[530px] rounded-[15px] bg-[#F2F2F2] p-8'>
                            <p className='text-[50px]  md:text-[64px]   text-[#454545] leading-[70.4px] font-[700]'>170+ </p>
                            <span className=' text-[20px]  md:text-[24px] text-[#454545] leading-[36px] font-[500]    '>Товаров</span>
                        </div>
                        <div className='gap-[60px] md:gap-[83px] w-full grid max-w-[530px] rounded-[15px] bg-[#F2F2F2] p-8'>
                            <p className=' text-[50px] md:text-[64px]   text-[#454545] leading-[70.4px] font-[700]'>1000+ </p>
                            <span className=' text-[20px] md:text-[24px] text-[#454545] leading-[36px] font-[500]    '>Довольных покупателей</span>
                        </div>
                        <div className='gap-[60px] md:gap-[83px] w-full grid max-w-[530px] rounded-[15px] bg-[#F2F2F2] p-8'>
                            <p className=' text-[50px] md:text-[64px]   text-[#454545] leading-[70.4px] font-[700]'>170+ </p>
                            <span className=' text-[20px] md:text-[24px] text-[#454545] leading-[36px] font-[500]    '>Товаров</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 md:mt-[18px] mt-[25px]'>
                        <p className='text-[20px]  text-[#454545] font-[500] leading-[30px]   '>Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют.</p>
                        <p className='text-[20px]  text-[#454545] font-[500] leading-[30px]   '>Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!</p>
                        <p className='text-[20px]  text-[#454545] font-[500] leading-[30px]   '>Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют.</p>
                        <p className='text-[20px]  text-[#454545] font-[500] leading-[30px]   '>Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent