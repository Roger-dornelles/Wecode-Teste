import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Favorites from '../pages/Favorites'
import Cart from '../pages/Cart'
const Router = () => {
    return (
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/Favoritos' Component={Favorites} />
            <Route path='/Compras' Component={Cart} />
        </Routes>
    )
}

export default Router
