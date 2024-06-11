import React from 'react'
import notFound from '../../assets/not-found/404.png'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='kontainer'>
            <div className='flex justify-center items-center py-10'>
                <img src={notFound} alt="" />
            </div>
            <div className='flex flex-col items-center gap-[60px] mt-[18px]'>
                <p>Похоже, ничего не нашлось :(</p>
                <Link to={"/"}>
                    <button className='bg-[#454545] px-[62px] py-[14px] rounded-[100px] text-white'>На главную</button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound