import React from 'react'
import './ShippingHero.css'

const ShippingHero = () => {
    return (
        <div className='pt-[50px]'>
            <div className='kontainer grid gap-6 sm:grid-cols-2'>
                <div>
                    <p className='text-[#454545] shipping__title   sm:text-[64px] font-[700] leading-[70.4px] sm:max-w-[320px]   '>Доставка и оплата</p>
                </div>
                <div className='flex flex-col gap-[60px]'>
                    <div className='flex flex-col gap-7 '>
                        <p className=' text-[20px] sm:text-[24px] font-[600] leading-[33.6px]   '>Доставка</p>
                        <p className='text-[18px] sm:text-[20px] font-[400] leading-[28px]   '>Мы осуществляем доставку со склада по Москве и Московской области собственной курьерской службой. Транспортными компаниями нашу продукцию мы доставляем по всей территории РФ, а так же по всем странам СНГ. <span className='text-[#2F4DA3]   ' > Сроки доставки: 4—6 недель</span></p>
                    </div>
                    <div className='flex flex-col gap-7 '>
                        <p className=' text-[20px] sm:text-[24px] font-[600] leading-[33.6px]   '>Курьерская доставка</p>
                        <p className='text-[18px] sm:text-[20px] font-[400] leading-[28px]   '>БЕСПЛАТНО доставим в приделах МКАД любой заказ от <span className='text-[#2F4DA3]'>5 000 ₽</span>.Заказы свыше <span className='text-[#2F4DA3]'>30 000 ₽</span> имеют бесплатную доставку, включительно 15 км от МКАД</p>
                    </div>
                    <div className='flex flex-col gap-7 '>
                        <p className=' text-[20px] sm:text-[24px] font-[600] leading-[33.6px]   '>Самовывоз</p>
                        <p className='text-[18px] sm:text-[20px] font-[400] leading-[28px]   '>Любой заказ можно забрать самостоятельно по адресу:г. Москва, Дмитровское шоссе д.100с2</p>
                    </div>
                </div>
            </div>
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
        </div>
    )
}

export default ShippingHero