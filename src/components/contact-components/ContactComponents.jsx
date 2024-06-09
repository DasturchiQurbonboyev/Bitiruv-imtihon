import React from 'react'
import './ContactComponent.css'

const ContactComponents = () => {
    return (
        <div>
            <div className='kontainer'>
                <div className='contact__title'>
                    <p className='text-[#454545] text-[28px]  sm:text-[40px] md:text-[55px] lg:text-[64px] font-[700]'>Контакты</p>
                    <div>
                        <a className='text-[#454545] text-[20px] md:text-[24px] font-[600]' href='+88008904656'>8 (800) 890-46-56</a>
                        <p className='text-[#454545] text-[16px] font-[400]   '>Пн-Пт: 10:00 до 19:00</p>
                        <p className='text-[#454545] text-[16px] font-[400]   '>Сб-Вс: заказ через корзину</p>
                        <p className='text-[#454545] text-[16px] font-[400]   '>Телефоны:</p>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <div className='z-0 max-w-[1700px] w-full mx-auto mt-[60px]'>
                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 15 }}>
                        <a
                            href="https://yandex.com/maps/org/95390250795/?utm_medium=mapframe&utm_source=maps"
                            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                        >
                            Laylo
                        </a>
                        <a
                            href="https://yandex.com/maps/21947/navoi/category/grocery/184108031/?utm_medium=mapframe&utm_source=maps"
                            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                        >
                            Магазин продуктов в Навои
                        </a>
                        <iframe
                            src="https://yandex.com/map-widget/v1/?ll=65.385063%2C40.111557&mode=search&oid=95390250795&ol=biz&sctx=ZAAAAAgBEAAaKAoSCWGowwq3WFBAESeIug9ADkRAEhIJNxsrMc9Kej8Rr5emCHB6Zz8iBgABAgMEBSgKOABAu6sBSAFqAnRynQHNzEw9oAEAqAEAvQGhfFiuwgEGq%2B7OreMCggIMbGF5bG8gbWFya2V0igIAkgIAmgIMZGVza3RvcC1tYXBz&sll=65.385063%2C40.111557&sspn=0.007474%2C0.006317&text=laylo%20market&utm_campaign=desktop&utm_medium=search&utm_source=maps&z=16.42"
                            width="100%"
                            height="400"
                            frameBorder="1"
                            allowFullScreen
                            style={{ position: 'relative' }}
                        ></iframe>
                    </div>
                </div>
                <div className='kontainer sm:absolute left-[-50%] right-[-50%] '>
                    <div className='bg-white  p-[40px] sm:-mt-[250px] lg:-mt-[200px] rounded-[15px] z-10 grid gap-10 justify-center sm:grid-cols-2 lg:grid-cols-4 '>
                        <div>
                            <p className='text-[#454545] text-[24px] font-[600]'>Адрес магазина</p>
                            <span className='text-[#454545] text-[16px]'>г. Москва, Дмитровское шоссе д.100с2</span>
                        </div>
                        <div>
                            <p className='text-[#454545] text-[24px] font-[600]'>Почта</p>
                            <a className='text-[#454545] text-[16px]' href="NORNLIGHT@mail.ru">NORNLIGHT@mail.ru</a>
                        </div>
                        <div>
                            <p className='text-[#454545] text-[24px] font-[600]'>Телефон</p>
                            <a className='text-[#454545] text-[16px]' href="+88008904656">8 (800) 890-46-56</a>
                        </div>
                        <div>
                            <button className='bg-[#454545] text-white rounded-[100px] px-[43px] py-[14px]'>Оставить заявку</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactComponents