import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homes from '../../screens/home/Homes'
import Login from '../../screens/login/Login'
import Register from '../../screens/register/Register'
import ResponsiveAppBar from '../../components/Navbar/Nvbar'
import ProductedRoutes from './ProductedRoutes'

const Routers = () => {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<ProductedRoutes component={<Homes />} />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers