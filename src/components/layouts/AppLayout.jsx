import React from 'react'
import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <div>
        <main>
            <header>Hello</header>
            <Outlet />
            <footer></footer>
        </main>
    </div>
  )
}

export default AppLayout
