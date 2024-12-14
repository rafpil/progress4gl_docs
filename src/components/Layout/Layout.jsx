import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'

import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className='main-content'>
            <div className='header'>
                <Navbar />
            </div>
            <div class='sidebar overflow-hidden overflow-y-auto'> <Sidebar /> </div>
            <Outlet />
            <div class='footer'> <Footer /> </div>
        </div>
    )
}

export default Layout