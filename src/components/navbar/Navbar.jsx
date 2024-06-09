import React from 'react'
import logo from '../../assets/navbar/logo.png'
import katalog from '../../assets/navbar/katalog.png'
import search from '../../assets/navbar/search.png'
import like from '../../assets/navbar/like.png'
import svyaz from '../../assets/navbar/svyaz.png'
import cart from '../../assets/navbar/cart.png'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { TfiAlignRight } from 'react-icons/tfi'
import { FaRegHeart } from 'react-icons/fa'
import { CgShoppingCart } from 'react-icons/cg'

const Navbar = () => {
    return (
        <header className=''>
            <div className='kontainer'>
                <div className='navbar__top  '>
                    <ul className='flex justify-between items-center gap-[27px]'>
                        <li><Link to={"/about"} className='text-[#454545] text-[14px] font-[600] leading-[19.2px]' >О компании</Link></li>
                        <li><Link to={"/shipping"} className='text-[#454545] text-[14px] font-[600] leading-[19.2px]' >Доставка и оплата</Link></li>
                        <li><Link to={"/return"} className='text-[#454545] text-[14px] font-[600] leading-[19.2px]' >Возврат</Link></li>
                        <li><Link to={"/garant"} className='text-[#454545] text-[14px] font-[600] leading-[19.2px]' >Гарантии</Link></li>
                        <li><Link to={"/contact"} className='text-[#454545] text-[14px] font-[600] leading-[19.2px]' >Контакты</Link></li>
                        <li><Link to={"/blog"} className='text-[#454545] text-[14px] font-[600] leading-[19.2px]' >Блог</Link></li>
                    </ul>
                    <div className='flex justify-center items-center gap-6'>
                        <a href="+99888008904656">8 (800) 890-46-56</a>
                        <p>Заказать звонок</p>
                    </div>
                </div>
            </div>
            <nav className='py-[10px]'>
                <div className='kontainer navbar  gap-[29px]'>
                    <div className='flex items-center gap-5'>
                        <div>
                            <TfiAlignRight size={25} />
                        </div>
                        <Link to={"/"}>
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className='navbar__res'>
                        {/* <FaHeart /> */}
                        <FaRegHeart size={25} />
                        <CgShoppingCart size={27} />
                    </div>
                    <div className='navbar__minu  justify-end flex-grow gap-[12px] items-end'>
                        <div className=' navbar__katalog__btn '>
                            <img className=' h-[22px]' src={katalog} alt="katalog" />
                            <p className='text-[#fff]'>Каталог</p>
                        </div>
                        <div className='navbar__search'>
                            <input className=' outline-none w-full' type="text" name="" id="" placeholder='Поиск по товарам' />
                            <img className='cursor-pointer' src={search} alt="search" />
                        </div>
                        <div className='flex items-end gap-[30px]'>
                            <div className='flex flex-col cursor-pointer justify-center items-center'>
                                <img src={like} alt="like" />
                                <span>Избранное</span>
                            </div>
                            <div className='svyaz  '>
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