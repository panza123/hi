import React from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        
        <Outlet/>
        <Footer/>
    </div>
  )
}
