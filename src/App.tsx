import React from 'react'
import './App.scss'

import Router from './Router'
import { BrowserRouter } from 'react-router-dom'

import { AddFavoriteProvider } from './context/AddFavoritesContext'
import { AddCartProvider } from './context/AddCartContext'

function App() {
    return (
        <BrowserRouter>
            <AddCartProvider>
                <AddFavoriteProvider>
                    <Router />
                </AddFavoriteProvider>
            </AddCartProvider>
        </BrowserRouter>
    )
}

export default App
