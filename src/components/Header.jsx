import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {  LuUser2 } from "react-icons/lu"
import {navigation} from '../utils/navigation'
const Header = () => {

    const navigate = useNavigate()


  return (
    <div className='flex justify-between px-8 md:px-16  py-5 items-center border-2 border-black bg-slate-950 text-white bg-opacity-80'>
        <h1 onClick={()=>navigate('/')} className='text-2xl md:text-3xl font-cursive cursor-pointer font-bold font-sour'>MOVIO</h1>
        <nav className='hidden md:flex list-none gap-10 font-sour font-light text-xl'>
            {navigation.map((e,i)=>{
                return (
                    <NavLink key={i} to={e.path} className={({isActive})=>`${isActive ? "text-slate-100" : "text-slate-300 hover:text-slate-500"}`}>{e.label}</NavLink>
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
