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
            <div className='categories-container-title'>
                <p className='categories-title'>Categorias</p>
            </div>
            <div className='slide'>
                <SwipeToSlide categories={categories} />
            </div>
        </div>
    )
}

export default Index
