import React from 'react'
import logo from '../../assets/navbar/logo.png'
import katalog from '../../assets/navbar/katalog.png'
import search from '../../assets/navbar/search.png'
import like from '../../assets/navbar/like.png'
import svyaz from '../../assets/navbar/svyaz.png'
import cart from '../../assets/navbar/cart.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className=''>
            <div className='kontainer'>
                <div className='flex justify-between items-center py-[12px]'>
                    <ul className='flex justify-between items-center gap-[27px]'>
                        <li><a href='#' className='text-[#454545] text-[14px] font-[600] leading-[19.2px]' >О компании</a></li>
                        <li><a href='#' className='text-[#454545] text-[14px] font-[600] leading-[19.2px]' >Доставка и оплата</a></li>
                        <li><a href='#' className='text-[#454545] text-[14px] font-[600] leading-[19.2px]' >Возврат</a></li>
                        <li><a href='#' className='text-[#454545] text-[14px] font-[600] leading-[19.2px]' >Гарантии</a></li>
                        <li><a href='#' className='text-[#454545] text-[14px] font-[600] leading-[19.2px]' >Контакты</a></li>
                        <li><a href='#blog' className='text-[#454545] text-[14px] font-[600] leading-[19.2px]' >Блог</a></li>
                    </ul>
                    <div className='flex justify-center items-center gap-6'>
                        <a href="+99888008904656">8 (800) 890-46-56</a>
                        <p>Заказать звонок</p>
                    </div>
                </div>
            </div>
            <nav>
                <div className='kontainer flex  items-center gap-[29px]'>
                    <div>
                        <Link to={"/"}>
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className='flex flex-grow gap-[12px] items-end'>
                        <div className=' cursor-pointer bg-[#000] flex py-[18px] px-[28px] rounded-[100px] w-[150px] gap-2'>
                            <img className=' h-[22px]' src={katalog} alt="katalog" />
                            <p className='text-[#fff]'>Каталог</p>
                        </div>
                        <div className='flex  flex-grow   items-center gap-2 border rounded-[100px] py-[14px] pl-[24px] pr-[18px]'>
                            <input className=' outline-none w-full' type="text" name="" id="" placeholder='Поиск по товарам' />
                            <img className='cursor-pointer' src={search} alt="search" />
                        </div>
                        <div className='flex items-end gap-[30px]'>
                            <div className='flex flex-col cursor-pointer justify-center items-center'>
                                <img src={like} alt="like" />
                                <span>Избранное</span>
                            </div>
                            <div className='flex flex-col cursor-pointer justify-center items-center'>
                                <img src={svyaz} alt="like" />
                                <span>Сравнение</span>
                            </div>
                            <div className='flex flex-col cursor-pointer justify-center items-center'>
                                <img src={cart} alt="like" />
                                <span>Корзина</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar