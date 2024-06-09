import React from 'react'
import Blog from '../../components/blog/Blog'

const BlogPage = () => {
    return (
        <div>
            <p className='text-[28px] sm:text-[30px] md:text-[50px]  lg:text-[64px] kontainer text-[#454545] font-[700] leading-[70.4px]   '>Блог</p>
            <Blog count={0} hidden={"hidden "} />
        </div>
    )
}

export default BlogPage