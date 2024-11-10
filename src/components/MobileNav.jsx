import React from 'react'

import { mobileNavigation } from "../utils/navigation";
import { NavLink } from 'react-router-dom';

const MobileNav = () => {



  return (
    <div className='flex md:hidden fixed bottom-0 w-full bg-slate-800 py-2 px-5 items-center justify-around text-slate-400'>
        {mobileNavigation.map((e,i)=>{
            return (
                <NavLink to={e.path} className={({isActive})=>`flex flex-col items-center ${isActive && "text-slate-100"}`}>
                    <div className='text-2xl'>
                        {e.icon}
                    </div>
                    <p className='text-base'>{e.label}</p>
                </NavLink>
            )
        })}
    </div>
  )
}

export default MobileNav
