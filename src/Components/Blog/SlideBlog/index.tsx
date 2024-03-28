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
            <div>
                <div className='slide-dotes'>
                    <ul className='dots'> {dots} </ul>
                </div>
            </div>
        )
    }

    const CustomSlide = (props: { image: string }) => {
        const { image, ...otherProps } = props

        return (
            <div {...otherProps}>
                <img src={`${image}`} alt='imagem do slide' className='imagem' />
            </div>
        )
    }

    return (
        <div className='slider-container'>
            <Slider {...settings} appendDots={appendDots}>
                {blogInfo &&
                    blogInfo.map((product) => {
                        return <CustomSlide image={product.image} key={product.id} />
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
