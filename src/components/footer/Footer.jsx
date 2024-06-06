import React from 'react'
import logo from '../../assets/navbar/logo.png'
import visa from '../../assets/footer/visa.png'
import vk from '../../assets/footer/vk.png'

const Footer = () => {
    return (
        <div className='bg-[#F2F2F2] mt-10'>
            <div className='kontainer'>
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <div>
                                <img src={logo} className="h-8 me-3" alt="Logo" />
                            </div>
                            <a href="+88008904656">8 (800) 890-46-56</a>
                            <img src={visa} alt="visa img" />
                            <p>Политика конфидециальности</p>
                            <p>Пользовательское соглашение</p>
                            <div className='flex gap-[12px]'>
                                <img src={vk} alt="vk img" />
                                <img src={vk} alt="vk img" />
                                <img src={vk} alt="vk img" />
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Покупателям</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="">
                                    <a href="https://flowbite.com/" className="hover:underline">О компании</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Возврат</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Гарантии</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Контакты</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Блог</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Товары</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Люстры</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Светильники</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Бра</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Торшеры</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Комплектуюшие</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Настольные лампы</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium mt-11">
                                <li className="">
                                    <a href="#" className="hover:underline">Споты</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Трековые светильники</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Уличные светильники</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Технические светильники</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Светодиодные ленты</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer