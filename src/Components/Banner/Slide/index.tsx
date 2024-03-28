import React from 'react'
import './styles.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ProductType } from '../../../types'

interface PropsSlide {
    products: ProductType[]
}

function SimpleSlider({ products }: PropsSlide) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 7000,
        autoplaySpeed: 5000,
        cssEase: 'linear',
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
                    <button className='slide-dotes-description'>Conheça agora!</button>
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
                {products &&
                    products.map((product) => {
                        return <CustomSlide image={product.image} key={product.id} />
                    })}
            </Slider>
        </div>
    )
}

const index = ({ products }: PropsSlide) => {
    return (
        <>
            <SimpleSlider products={products} />
        </>
    )
}

export default index
