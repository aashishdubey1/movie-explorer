import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Header'

const AppLayout = () => {
  return (
    <div>
        <main>
            <Header/>
            <Outlet />
            <footer></footer>
        </main>
    </div>
  )
}

export default AppLayout
