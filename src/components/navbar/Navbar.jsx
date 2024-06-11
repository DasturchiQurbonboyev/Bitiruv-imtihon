import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TfiAlignRight } from 'react-icons/tfi';
import { FaRegHeart } from 'react-icons/fa';
import { CgShoppingCart } from 'react-icons/cg';
import { RiCloseLargeFill } from 'react-icons/ri';
import { FiBarChart } from 'react-icons/fi';
import logo from '../../assets/navbar/logo.png';
import katalog from '../../assets/navbar/katalog.png';
import search from '../../assets/navbar/search.png';
import like from '../../assets/navbar/like.png';
import svyaz from '../../assets/navbar/svyaz.png';
import cart from '../../assets/navbar/cart.png';
import './Navbar.css';
import { useSelector } from 'react-redux';

const NavbarLinks = ({ onClick }) => (
    <ul className='mt-5'>
        <li className='py-[15px] text-center border-t-2'>
            <Link to={"/about"} onClick={onClick}>О компании</Link>
        </li>
        <li className='py-[15px] text-center border-t-2'>
            <Link to={"/shipping"} onClick={onClick}>Доставка и оплата</Link>
        </li>
        <li className='py-[15px] text-center border-t-2'>
            <Link to={"/return"} onClick={onClick}>Возврат</Link>
        </li>
        <li className='py-[15px] text-center border-t-2'>
            <Link to={"/garant"} onClick={onClick}>Гарантии</Link>
        </li>
        <li className='py-[15px] text-center border-t-2'>
            <Link to={"/contact"} onClick={onClick}>Контакты</Link>
        </li>
        <li className='py-[15px] text-center border-t-2 border-b-2'>
            <Link to={"/blog"} onClick={onClick}>Блог</Link>
        </li>
    </ul>
);

const ContactInfo = () => (
    <div className='flex flex-col justify-center items-center gap-3 mt-8'>
        <a href="tel:+99888008904656">8 (800) 890-46-56</a>
        <p>Заказать звонок</p>
    </div>
);

const Navbar = () => {
    const [navbarToggle, setNavbarToggle] = useState(false);

    const cartData = useSelector(state => state.cart.value)
    const wishes = useSelector(state => state.wishlist.value)


    const adminLocation = useLocation().pathname


    if (adminLocation === "/login" || adminLocation === "/admin") {
        return (
            <></>
        )
    }

    return (
        <header>
            <div className='kontainer'>
                <div className={`bg-white pb-5 navbar__animation ${navbarToggle ? "navbar__open" : ""}`}>
                    <div className='flex justify-between items-center py-[15px]'>
                        <div>
                            <RiCloseLargeFill onClick={() => setNavbarToggle(false)} className='cursor-pointer' size={28} />
                        </div>
                        <div className='flex gap-10'>
                            <Link to={"/wishlist"} onClick={() => setNavbarToggle(false)}>
                                <div className='relative'>
                                    <FaRegHeart className='cursor-pointer' size={25} />
                                    {wishes?.length > 0 ?
                                        <div className='absolute -top-4 flex justify-center items-center rounded-[30px] -right-5 text-white bg-[#C63C3C] px-[5px]'>{wishes?.length}</div> :
                                        <></>
                                    }
                                </div>
                            </Link>
                            <FiBarChart className='cursor-pointer' size={25} />
                            <Link to={"/cart"} onClick={() => setNavbarToggle(false)}>
                                <div className='relative'>
                                    <CgShoppingCart className='cursor-pointer' size={27} />
                                    {wishes?.length > 0 ?
                                        <div className='absolute -top-4 flex justify-center items-center rounded-[30px] -right-4 text-white bg-[#C63C3C] px-[5px]'>{wishes?.length}</div> :
                                        <></>
                                    }
                                </div>
                            </Link>
                        </div>
                    </div>
                    <NavbarLinks onClick={() => setNavbarToggle(false)} />
                    <div className='bg-[#000] flex justify-center py-3 rounded-[100px] mt-[25px] gap-4 max-w-[330px] mx-auto'>
                        <img className='h-[22px]' src={katalog} alt="katalog" />
                        <p className='text-[#fff]'>Каталог</p>
                    </div>
                    <ContactInfo />
                </div>
                <div className='navbar__top'>
                    <ul className='flex justify-between items-center gap-[27px]'>
                        <li><Link to={"/about"} onClick={() => setNavbarToggle(false)} className='text-[#454545] text-[14px] font-[600] leading-[19.2px]'>О компании</Link></li>
                        <li><Link to={"/shipping"} onClick={() => setNavbarToggle(false)} className='text-[#454545] text-[14px] font-[600] leading-[19.2px]'>Доставка и оплата</Link></li>
                        <li><Link to={"/return"} onClick={() => setNavbarToggle(false)} className='text-[#454545] text-[14px] font-[600] leading-[19.2px]'>Возврат</Link></li>
                        <li><Link to={"/garant"} onClick={() => setNavbarToggle(false)} className='text-[#454545] text-[14px] font-[600] leading-[19.2px]'>Гарантии</Link></li>
                        <li><Link to={"/contact"} onClick={() => setNavbarToggle(false)} className='text-[#454545] text-[14px] font-[600] leading-[19.2px]'>Контакты</Link></li>
                        <li><Link to={"/blog"} onClick={() => setNavbarToggle(false)} className='text-[#454545] text-[14px] font-[600] leading-[19.2px]'>Блог</Link></li>
                    </ul>
                    <div className='flex justify-center items-center gap-6'>
                        <a href="tel:tel:+99888008904656">8 (800) 890-46-56</a>
                        <p>Заказать звонок</p>
                    </div>
                </div>
            </div>
            <nav className='py-[10px]'>
                <div className='kontainer navbar gap-[29px]'>
                    <div className='flex items-center gap-5'>
                        <div className='navbar__open__btn'>
                            <TfiAlignRight onClick={() => setNavbarToggle(true)} className='cursor-pointer' size={25} />
                        </div>
                        <Link to={"/"}>
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className='navbar__res'>
                        <Link className='relative' to={"/wishlist"}>
                            <FaRegHeart size={25} />
                            {wishes?.length > 0 ?
                                <div className='absolute -top-4 flex justify-center items-center rounded-[30px] -right-5 text-white bg-[#C63C3C] px-[5px]'>{wishes?.length}</div> :
                                <></>
                            }
                        </Link>
                        <Link className='relative' to={"/cart"}>
                            <CgShoppingCart size={27} />
                            {cartData?.length > 0 ?
                                <div className='absolute -top-4 flex justify-center items-center rounded-[30px] -right-5 text-white bg-[#C63C3C] px-[5px]'>{cartData?.length}</div> :
                                <></>
                            }
                        </Link>
                    </div>
                    <div className='navbar__minu justify-end flex-grow gap-[12px] items-end'>
                        <div className='navbar__katalog__btn'>
                            <img className='h-[22px]' src={katalog} alt="katalog" />
                            <p className='text-[#fff]'>Каталог</p>
                        </div>
                        <div className='navbar__search'>
                            <input className='outline-none w-full' type="text" placeholder='Поиск по товарам' />
                            <img className='cursor-pointer' src={search} alt="search" />
                        </div>
                        <div className='flex items-end gap-[30px]'>
                            <Link to={"/wishlist"}>
                                <div className='flex relative flex-col cursor-pointer justify-center items-center'>
                                    {wishes?.length > 0 ?
                                        <div className='absolute -top-5 flex justify-center items-center rounded-[30px] -right-1 text-white bg-[#C63C3C] px-[5px]'>{wishes?.length}</div> :
                                        <></>
                                    }
                                    <img src={like} alt="like" />
                                    <span>Избранное</span>
                                </div>
                            </Link>
                            <Link to={"/svyaz"}>
                                <div className='svyaz'>
                                    <img src={svyaz} alt="like" />
                                    <span>Сравнение</span>
                                </div>
                            </Link>
                            <Link to={"/cart"}>
                                <div className='flex relative flex-col justify-center items-center'>
                                    {cartData?.length > 0 ?
                                        <div className='absolute -top-5 flex justify-center items-center rounded-[30px] -right-1 text-white bg-[#C63C3C] px-[5px]'>{cartData?.length}</div> :
                                        <></>
                                    }
                                    <img src={cart} alt="like" />
                                    <span>Корзина</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div>
                <div className='navbar__res__search'>
                    <input className='outline-none w-full' type="text" placeholder='Поиск по товарам' />
                    <div>
                        <img className='cursor-pointer' src={search} alt="search" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
