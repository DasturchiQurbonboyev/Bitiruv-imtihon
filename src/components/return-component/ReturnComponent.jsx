import React from 'react'

const ReturnComponent = () => {
    return (
        <div className='pt-[50px]'>
            <div className='kontainer grid gap-6 sm:grid-cols-2'>
                <div>
                    <p className='text-[#454545] shipping__title   sm:text-[64px] font-[700] leading-[70.4px] sm:max-w-[320px]   '>Возврат</p>
                </div>
                <div className='flex flex-col gap-[60px]'>
                    <div className='flex flex-col gap-7 '>
                        <p className=' text-[20px] sm:text-[24px] font-[600] leading-[33.6px]   '>Обмен и возврат по желанию покупателя</p>
                        <p className='text-[18px] sm:text-[20px] font-[400] leading-[28px]   '>Если товар по каким-то причинам не подошел вам, вы имеете право вернуть его или обменять на другой в течение 7 дней* с момента покупки при соблюдении следующих условий:</p>
                        <ul className='list-inside text-[#2F4DA3] text-[20px] font-[400]   '>
                            <li className='list-disc'>Товар имеет первоначальный вид, имеется товарная кондиция;</li>
                            <li className='list-disc'>Товар имеет полную комплектацию, включая упаковочные материалы;</li>
                            <li className='list-disc'>Товар не имеет следов подключался и не имеет признаков монтажа;</li>
                            <li className='list-disc'>Упаковка товара не имеет повреждений, присутствует первоначальный товарный вид;</li>
                            <li className='list-disc'>Есть документ, подтверждающий покупку в нашем интернет-магазине.</li>
                            <li className='list-disc'>Для возврата товара необходимо привезти его к нам в офис.</li>
                            <li className='list-disc'>Товар из других городов можно прислать нам транспортной компанией, при этом услуги транспортной компании  оплачиваются клиентом.</li>
                            <li className='list-disc'>*В течение 14 дней для отдельных брендов. При оформлении заказа уточните у менеджера</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-7 '>
                        <p className=' text-[20px] sm:text-[24px] font-[600] leading-[33.6px]   '>Обмен и возврат по ошибке продавца</p>
                        <p className='text-[18px] sm:text-[20px] font-[400] leading-[28px]   '>Причины обмена или возврата по ошибке продавца:</p>
                        <ul className='list-inside text-[#2F4DA3] text-[20px]   '>
                            <li className="list-disc">Неполная комплектация товара</li>
                            <li className="list-disc">Брак или дефект товара</li>
                            <li className="list-disc">Если вы выявили дефект, брак или неполную комплектацию товара, необходимо сделать фото дефекта и отправить на почту mail@at-svet.ru, указав краткое описание характера брака/</li>
                            <li className="list-disc">Мы заменим бракованный товар или довезем недостающие части. Доставка будет осуществлена бесплатно</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-7 '>
                        <p className=' text-[20px] sm:text-[24px] font-[600] leading-[33.6px]   '>Возврат денежных средств</p>
                        <p className='text-[18px] sm:text-[20px] font-[400] leading-[28px]   '>Возврат денежных средств осуществляется путем перевода на банковские реквизиты покупателя при наличии заявления от покупателя.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReturnComponent