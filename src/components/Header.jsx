import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {  LuUser2 } from "react-icons/lu";

const Header = () => {

    const navigate = useNavigate()

    const navigation = [
        {
            lable:"Search",
            path:"/search"
        },
        {
            lable:"Movies",
            path:"/movies"
        },
        {
            lable:"TVs",
            path:"/tvs"
        },
    ]


  return (
    <div className='flex justify-between px-4 md:px-24  py-5 items-center border-2 border-black bg-slate-950 text-white bg-opacity-80'>
        <h1 onClick={()=>navigate('/')} className='text-2xl font-cursive cursor-pointer font-bold font-sour'>MOVIO</h1>
        <nav className='hidden md:flex list-none gap-10 font-sour font-light text-lg'>
            {navigation.map((e,i)=>{
                return (
                    <NavLink key={i} to={e.path} className={({isActive})=>`${isActive ? "text-slate-100" : "text-slate-300 hover:text-slate-500"}`}>{e.lable}</NavLink>
                )
            })}
        </nav>
        <div>
            <LuUser2 className='text-xl' onClick={()=>navigate('/profile')}/>
        </div>
    </div>
  )
}

export default Header
