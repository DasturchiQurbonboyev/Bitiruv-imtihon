import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, deleteCategory, setCategories } from '../../../context/slice/categorySlice';

const CreateCategoryPage = () => {
    const [title, setTitle] = useState("");
    const state = useSelector((state) => state.categoryes.categoryes);
    const dispatch = useDispatch();

    useEffect(() => {
        const categories = JSON.parse(localStorage.getItem('categories')) || [];
        dispatch(setCategories(categories));
    }, [dispatch]);

    const handleCreateCategory = (e) => {
        e.preventDefault(); // Sahifa yangilanishini to'xtatadi
        if (title.trim()) {
            dispatch(addCategory({ id: state.length + 1, title }));
            setTitle("");
        }
    };

    const handleDeleteCategory = (id) => {
        dispatch(deleteCategory(id));
    };

    return (
        <div>
            <h2 className='text-[#454545] text-[28px] font-[500]'>Create Category</h2>

            <form className='flex gap-[15px] items-center mt-[25px]' onSubmit={handleCreateCategory}>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className='outline-none border p-[10px] rounded-[5px]'
                    type="text"
                />
                <button
                    type='submit' // Type submit, formani yuboradi
                    className='border p-[10px] rounded-[5px] bg-[#e0dcdc] hover:bg-[#c4bfbf]'
                >
                    Create
                </button>
            </form>

            <div className='flex flex-col gap-[15px] mt-[25px]'>
                {state?.map((el, inx) => (
                    <div key={inx} className='border flex items-center justify-between p-[10px] rounded-[5px]'>
                        <span>{el.title}</span>
                        <button
                            onClick={() => handleDeleteCategory(el.id)}
                            type='button'
                            className='p-[10px] rounded-[5px] border bg-[#e0dcdc] hover:bg-[#c4bfbf]'
                        >
                            delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CreateCategoryPage;
