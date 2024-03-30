import React from 'react'
import Slider from 'react-slick'

import './styles.scss'
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
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
        ],
    }

    const CustomSlide = (props: { categories: CategorieType }) => {
        const { categories, ...otherProps } = props

        return (
            <div {...otherProps} style={{ padding: 10 }}>
                <img src={categories.image} alt={`imagem categoria ${categories.categorie}`} />
                <p>{categories.categorie}</p>
            </div>
        )
    }

    return (
        <div className='categories-slider-container'>
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
