import React from 'react'
import Slider from 'react-slick'
import { BlogType } from '../../../types'

import './styles.scss'

interface SlideBlogProps {
    blogInfo: BlogType[]
}

const SimplesSlide = ({ blogInfo }: SlideBlogProps) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    const appendDots = (
        dots:
            | string
            | number
            | boolean
            | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | null
            | undefined,
    ) => {
        return (
            <div className='blog-slide-dotes'>
                <ul className='blog-dots blog-slick-dots'> {dots} </ul>
            </div>
        )
    }

    const CustomSlide = (props: { image: string; title: string; description: string }) => {
        const { image, title, description, ...otherProps } = props

        return (
            <div {...otherProps}>
                <img src={`${image}`} alt='imagem do slide' className='imagem' />
                <p className='blog-title'>{title}</p>
                <p className='blog-description'>{description}</p>
                <button className='blog-slide-button'>Saiba mais!</button>
            </div>
        )
    }

    return (
        <div className='blog-slider-container'>
            <Slider {...settings} appendDots={appendDots}>
                {blogInfo &&
                    blogInfo.map((product) => {
                        return (
                            <CustomSlide
                                image={product.image}
                                key={product.id}
                                title={product.title}
                                description={product.description}
                            />
                        )
                    })}
            </Slider>
        </div>
    )
}

const Index = ({ blogInfo }: SlideBlogProps) => {
    return (
        <>
            <SimplesSlide blogInfo={blogInfo} />
        </>
    )
}

export default Index
