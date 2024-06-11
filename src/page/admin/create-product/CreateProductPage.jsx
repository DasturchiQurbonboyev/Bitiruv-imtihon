import React from 'react'

const CreateProductPage = () => {

    return (
        <div>
            <h2 className='text-[#454545] text-[28px] font-[500]'>
                CreateProductPage
            </h2>

            <div className='max-w-[620px]'>
                <label htmlFor="Title">Title</label><br />
                <input className='border w-full mt-[8px] mb-[10px] bg-[#F8F8F8] rounded-[10px] px-4 py-[8px] outline-none ' type="text" name="" id="Title" /><br />

                <label htmlFor="Price">Price</label><br />
                <input className='border w-full mt-[8px] mb-[10px] bg-[#F8F8F8] rounded-[10px] px-4 py-[8px] outline-none ' type="text" name="" id="Price" /><br />

                <label htmlFor="Image-url">Title</label><br />
                <input className='border w-full mt-[8px] mb-[10px] bg-[#F8F8F8] rounded-[10px] px-4 py-[8px] outline-none ' type="text" name="" id="Image-url" /><br />

                <label htmlFor="Category">Category</label><br />
                <select className='w-full border mt-2 mb-[10px] bg-[#F8f8f8] px-4 py-[8px] rounded-[10px] outline-none ' name="" id="Category">
                    <option value=""></option>
                </select><br />

                <label htmlFor="Desc">Desc</label><br />
                <textarea className='border w-full mt-[8px]  h-[164px] bg-[#F8F8F8] rounded-[10px] p-4 outline-none  resize-none' name="" id="Desc"></textarea>

                <button className='text-white bg-[#454545] px-[50px] mt-[23px] py-[10px] rounded-[5px]  '>Create</button>
            </div>
        </div>
    )
}

export default CreateProductPage