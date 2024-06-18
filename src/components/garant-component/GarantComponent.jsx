import React, { useEffect } from 'react'

const GarantComponent = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className='pt-[50px]'>
            <div className='kontainer grid gap-6 sm:grid-cols-2'>
                <div>
                    <p className='text-[#454545] shipping__title   sm:text-[64px] font-[700] leading-[70.4px] sm:max-w-[320px]   '>Гарантии</p>
                </div>
                <div className='flex flex-col gap-[60px]'>
                    <p className=' text-[20px] sm:text-[24px] font-[600] leading-[33.6px]   '>Обмен и возврат по желанию покупателя</p>
                    <div className='flex flex-col '>
                        <p className='text-[18px] p-0 m-0 sm:text-[20px] font-[400] leading-[28px]   '>
                            Все товары в магазине «NornLight» имеют гарантию. Она заявляется производителем и имеет определенный срок действия на различные группы товаров.
                            Если ваше изделие вышло из строя в течение гарантийного срока вы можете обратиться к нам и получить бесплатный ремонт. Для этого нужно:
                        </p>
                        <ul className='list-inside p-0 m-0'>
                            <li className="list-disc ">Предоставить чек, накладную или сообщить почту или номер телефона, указанные при оформлении заказа.</li>
                            <li className="list-disc">Привезти товар к нам на склад или отправить его транспортной компанией.</li>
                            <li className="list-disc">После товар отправляется на экспертизу и ремонт. Если ремонт невозможен, мы обменяем изделие на аналогичное либо вернем деньги за покупку.</li>
                        </ul>
                        <p>Обращаем внимание, что «А-Свет» не является сервисным центром, а выполняет роль посредника между клиентом и поставщиком.
                            <br />  Поэтому сроки проведения ремонта могут отличаться для товаров различных брендов.</p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default GarantComponent