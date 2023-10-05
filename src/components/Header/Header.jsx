import React from 'react';
import logo from '../../assets/logo-small.png'
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header className='flex justify-between items-center bg-slate-400 px-5 py-5 rounded-xl mb-10'>
                <img src={logo} alt="" />
                <nav>
                    <NavLink className={({isActive})=>isActive? "bg-white mx-2 px-3 py-2 hover:bg-green-600 rounded-lg":'bg-slate-300 mx-2 px-3 py-2 hover:bg-green-600 rounded-lg'} to='/'>Home</NavLink>
                    <NavLink className={({isActive})=>isActive? "bg-white mx-2 px-3 py-2 hover:bg-green-600 rounded-lg":'bg-slate-300 mx-2 px-3 py-2 hover:bg-green-600 rounded-lg'} to='/restuarents'>Restuarent</NavLink>
                    <NavLink className={({isActive})=>isActive? "bg-white mx-2 px-3 py-2 hover:bg-green-600 rounded-lg":'bg-slate-300 mx-2 px-3 py-2 hover:bg-green-600 rounded-lg'} to='/category'>Categories</NavLink>
                    <NavLink className={({isActive})=>isActive? "bg-white mx-2 px-3 py-2 hover:bg-green-600 rounded-lg":'bg-slate-300 mx-2 px-3 py-2 hover:bg-green-600 rounded-lg'} to='/login'>Login</NavLink>

                </nav>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;