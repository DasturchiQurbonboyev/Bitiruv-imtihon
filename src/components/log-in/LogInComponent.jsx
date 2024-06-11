import React, { useState } from 'react';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import { toast } from 'react-toastify';

const LogInComponent = () => {
    const [username, setUsername] = useState("john32");
    const [password, setPassword] = useState("87654321");
    const [loading, setLoading] = useState(false);
    const [showpassword, setShowpassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        if (!username.trim() || !password.trim()) {
            setLoading(false);
            return toast.warn("Iltimos ma'lumotni to'ldiring");
        }

        // Lokal tekshirish
        if (username === "john32" && password === "87654321") {
            localStorage.setItem("token", "dummyToken");
            window.open("/admin", "_self");
            toast.success('Muvaffaqiyatli kirdingiz!');
        } else {
            toast.error("Username yoki Parol noto'g'ri");
        }

        setLoading(false);
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <form onSubmit={handleSubmit} className='w-full max-w-[800px] mx-auto p-6 rounded-lg shadow-lg bg-white'>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="username">ФИО</label>
                <input
                    id="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type="text"
                />
            </div>
            <div className='mb-6'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">телефон</label>
                <div className='relative'>
                    <input
                        id="password"
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type={`${!showpassword ? "password" : "text"}`}
                    />
                    <button type='button' className='absolute inset-y-0 right-0 flex items-center px-3 text-gray-700' onClick={() => setShowpassword(p => !p)}>
                        {password ? (showpassword ? <FaEyeSlash /> : <FaRegEye />) : null}
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <button className='bg-[#33A0FF] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
                    Kirish
                </button>
            </div>
        </form>
    );
};

export default LogInComponent;
