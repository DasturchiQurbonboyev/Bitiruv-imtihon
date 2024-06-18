import React from 'react'
import product from '../../assets/hero/product.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleSingle } from '../../context/slice/singleSlice'




const NavbarSearchModle = ({ data, setValue }) => {

    const dispatch = useDispatch()

    let searchItems = data?.map((el) => (
        <div key={el.id} title={el.title} className='search__result__box'>
            <Link to={'/single'} onClick={() => {
                dispatch(toggleSingle(el)),
                    setValue("")

            }} className='flex gap-5 cursor-pointer hover:bg-[#666] p-2'>
                <img src={product} width={35} alt="" />
                <span className='text-[#000]'>{el.title}</span>
            </Link>
        </div>
    ))
    return (
        <div className='navbar__search__result' >
            {data.length ? searchItems :
                <div>
                    <p className='p-[15px] text-white'>Malumot topilmadi!!!</p></div>}
        </div>
    )
}

export default NavbarSearchModle