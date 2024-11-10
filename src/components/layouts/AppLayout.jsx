import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Header'
import MobileNav from '../MobileNav'

const AppLayout = () => {
  return (
    <div>
        <main>
            <Header/>
            <Outlet />
        </main>
        <footer></footer>
        <MobileNav />
    </div>
  )
}

export default AppLayout
