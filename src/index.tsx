import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { AddCartProvider } from './context/AddCartContext'
import { AddFavoriteProvider } from './context/AddFavoritesContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <AddCartProvider>
            <AddFavoriteProvider>
                <App />
            </AddFavoriteProvider>
        </AddCartProvider>
    </React.StrictMode>,
)

reportWebVitals()
