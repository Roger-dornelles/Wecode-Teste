import React from 'react'
import Slider from 'react-slick'

import '../styles.scss'
import { CategoriesType } from '../../../types'

interface CategoriesProps {
    categories: CategoriesType[]
}

interface CategorieType {
    id: number
    image: string
    categorie: string
}

function SwipeToSlide({ categories }: CategoriesProps) {
    const settings = {
        className: 'center',
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 4,
        swipeToSlide: true,
    }

    const CustomSlide = (props: { [x: string]: unknown; categories: CategorieType }) => {
        const { categories, ...otherProps } = props

        return (
            <div {...otherProps}>
                <img src={categories.image} alt={`imagem categoria ${categories.categorie}`} />
                <p>{categories.categorie}</p>
            </div>
        )
    }

    return (
        <div className='slider-container'>
            <Slider {...settings}>
                {categories &&
                    categories.map((categorie) => {
                        return <CustomSlide key={categorie.id} categories={categorie} />
                    })}
            </Slider>
        </div>
    )
}

export default SwipeToSlide
