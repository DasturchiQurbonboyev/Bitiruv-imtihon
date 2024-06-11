import React, { useState } from 'react'
import productImg from '../../assets/product/cartImg.png'
import ptichka from '../../assets/product/ptichka.png'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { remuverFromCart, clearCart, incCart, decCart } from '../../context/slice/cartSlice'
import Empty from '../empty/Empty'
import PhoneInput from 'react-phone-number-input/input'

const CartComponent = () => {
    const dispatch = useDispatch();

    const cartData = useSelector(state => state.cart.value)
    let oplata = cartData.reduce((acc, el) => acc + el.price, 0);

    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [comment, setComment] = useState("")


    const BOT_TOKEN = "7479336002:AAE-fiEczU4hqcNKjmeBKZhRtwj_toutzJI"
    const USR_ID = "5661686916"
    const CHAT_ID = "-4218604797"

    //  Get updates: https://api.telegram.org/bot7479336002:AAE-fiEczU4hqcNKjmeBKZhRtwj_toutzJI/getUpdates


    let sum = cartData.reduce((acc, el) => {
        return acc + el.quantity * el.price
    }, 0)

    const handlePayment = () => {
        if (!firstName || !email || !address || !phone) {
            alert('Iltimos, barcha maydonlarni to\'ldiring.');
            return;
        }

        let text = "Buyrutmalar! %0A%0A"
        text += `FISH:   ${firstName} %0A`
        text += `Address: ${address}%0A`
        text += `Phone ${phone} %0A`
        text += `Email: ${email} %0A%0A%0A`
        text += `Maxsulot soni ${cartData?.length} ta, Jami summa ${oplata + Math.round(oplata / 10)} ₽ %0A%0A%0A%0A `
        text += `Xaridor izohi:"${comment}"%0A`
        let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`
        let api = new XMLHttpRequest()
        api.open("GET", url, true)
        api.send()
    }


    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

    const handlePaymentMethodChange = (methodId) => {
        setSelectedPaymentMethod(methodId);
    };


    if (cartData?.length > 0) {

        return (
            <div className='kontainer'>
                <div className='bg-[#F2F2F2] px-[20px] sm:px-[46px] py-[36px] rounded-[20px] mt-[50px]'>
                    <div className=' hidden sm:flex'>
                        <div className='w-[120px]'>
                            <p className='text-[#454545] text-[16px] font-[500]  '>Фото</p>
                        </div>
                        <div className='grid flex-grow grid-cols-4 gap-3 pb-[28px]'>
                            <div>
                                <p className='text-[#454545] text-[16px] font-[500]  '>Товары</p>
                            </div>
                            <div>
                                <p className='text-[#454545] text-[16px] font-[500]  '>Описание</p>
                            </div>
                            <div>
                                <p className='text-[#454545] text-[16px] font-[500]  '>Артикул</p>
                            </div>
                            <div>
                                <p className='text-[#454545] text-[16px] font-[500]  '>Количество</p>
                            </div>
                        </div>
                    </div>
                    {
                        cartData?.map((el, inx) => (
                            <div key={inx} className=' sm:flex gap-9 py-[20px] border-t-2 '>
                                <div className='w-[120px]'>
                                    <div className='bg-white w-[80px] h-[80px] flex justify-center items-center rounded-[15px]'>
                                        <img src={productImg} alt="" />
                                    </div>
                                </div>
                                <div className='grid flex-grow md:grid-cols-4 gap-3'>
                                    <div>
                                        <p className='text-[#454545] text-[16px] font-[600]'>{el.title}</p>
                                        <p>{el.price}₽</p>
                                    </div>
                                    <div>
                                        <p className='text-[#454545] text-[16px] font-[600]'>Светильник RADUGA COMBO XS Промышленное освещение; 50Вт; 230В; S4; XS;</p>
                                    </div>
                                    <div>
                                        <p className='text-[#454545] text-[16px] font-[600]'>
                                            RAD-COMBO-50/ XXX/ 230/ XXX/ XXX/ S4/ XS
                                        </p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex gap-5 items-center '>
                                            <button className='w-[20px]' onClick={() => dispatch(decCart(el))}>-</button>
                                            <p className='w-[60px] h-[60px] border rounded-[10px] flex justify-center items-center'>{el.quantity}</p>
                                            <button className='w-[20px]' onClick={() => dispatch(incCart(el))}>+</button>
                                        </div>
                                        <div>
                                            <RiDeleteBin5Line className='cursor-pointer' onClick={() => dispatch(remuverFromCart(el))} size={25} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='mt-[20px] bg-[#F2F2F2] rounded-[20px] px-[10px] md:px-[46px] py-[36px]  '>
                    <p className='text-[#454545] text-[22px] sm:text-[30px] md:text-[32px] font-[700]    '>Оформление</p>
                    <div className='grid md:grid-cols-3 gap-5 pt-[30px] pb-[37px] border-b-2'>
                        <input value={firstName} onChange={e => setFirstName(e.target.value)} className='border-2 w-full outline-none bg-inherit px-[10px] sm:px-[15px] md:px-[20px] py-[10px] sm:py-[12px] md:py-[14px] rounded-[100px] ' type="text" placeholder='ФИО' />
                        <PhoneInput
                            className='border-2 w-full outline-none bg-inherit px-[10px] sm:px-[15px] md:px-[20px] py-[10px] sm:py-[12px] md:py-[14px] rounded-[100px] '
                            placeholder="телефон"
                            value={phone}
                            onChange={setPhone} />
                        <input value={email} onChange={e => setEmail(e.target.value)} className='border-2 w-full outline-none bg-inherit px-[10px] sm:px-[15px] md:px-[20px] py-[10px] sm:py-[12px] md:py-[14px] rounded-[100px] ' type="email" placeholder='Электронная почта' />
                    </div>
                    <p className='text-[#454545] text-[22px] sm:text-[30px] md:text-[32px] font-[700] pt-3   '>Доставка</p>
                    <div className='flex flex-col gap-[31px] pb-[50px] pt-[31px]'>
                        <input value={address} onChange={e => setAddress(e.target.value)} className='max-w-[780px] w-full border-2 outline-none bg-inherit px-[10px] sm:px-[15px] md:px-[20px] py-[10px] sm:py-[12px] md:py-[14px] rounded-[100px]' type="text" placeholder='Адрес доставки' />
                        <textarea value={comment} onChange={e => setComment(e.target.value)} className='resize-none max-w-[780px] rounded-[26px] h-[150px] bg-inherit border px-[10px] sm:px-[15px] md:px-[20px] py-[14px]  ' placeholder='Комментарий' name="" id=""></textarea>
                    </div>
                </div>

                <div className='mt-[20px] bg-[#F2F2F2] rounded-[20px] px-[10px] md:px-[46px] py-[36px]  '>
                    <p className='text-[#454545] text-[22px] sm:text-[30px] md:text-[32px] font-[700] pt-3    '>Оплата</p>
                    <div className='flex flex-col md:flex-row gap-10 pt-8'>
                        <p className='text-[#454545] text-[16px] font-[600]'>Товары ............................................. {sum}₽</p>
                        <p className='text-[#454545] text-[16px] font-[600]'>Доставка .............................................. {Math.round(sum / 10)}₽</p>
                    </div>

                    <p className='pt-[69px] text-[#454545] text-[24px] font-[700]'>{sum + Math.round(sum / 10)}₽</p>
                    <div className='flex flex-col sm:flex-row  gap-6 items-center pt-[28px]'>
                        <button onClick={() => {
                            handlePayment(),
                                dispatch(clearCart())
                        }} className='max-w-[324px] w-full bg-[#454545] py-[14px] rounded-[100px] text-white  '>Купить</button>
                        <div className='flex items-center gap-1'>
                            <div className='w-[50px] h-[25px] flex justify-center items-center'>
                                <div className=' w-[18px] h-[18px] rounded-[50%] border border-[#454545] flex justify-center items-center'>
                                    <img className='' src={ptichka} alt="" />
                                </div>
                            </div>
                            <p>Я согласен наобработку моих персональных данных</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <Empty />
    )
}

export default CartComponent