import React from 'react'
import './styles.scss'
import SwipeToSlide from './SwipeToSlide'
import { CategoriesType } from '../../types'

interface CategoriesProps {
    categories: CategoriesType[]
}

const Index = ({ categories }: CategoriesProps) => {
    return (
        <div className='categories-container'>
            <p className='categories-title'>Categorias</p>

            <SwipeToSlide categories={categories} />
        </div>
    )
}

export default Index
