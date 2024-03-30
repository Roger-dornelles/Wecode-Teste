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
        // autoplay: true,
        speed: 1000,
        // autoplaySpeed: 500,
        // cssEase: 'linear',
    }

    const appendDots = (dots) => {
        return (
            <div>
                <div className='banner-slide-dotes'>
                    <button className='slide-dotes-description'>Conheça agora!</button>

                    <ul className='banner-dots'> {dots} </ul>
                </div>
            </div>
        )
    }

    const CustomSlide = (props: { image: string }) => {
        const { image, ...otherProps } = props

        return (
            <div {...otherProps}>
                <img
                    src={`${image}`}
                    alt='imagem do slide'
                    className='banner-imagem'
                    style={{ objectFit: 'fill' }}
                />
            </div>
        )
    }

    return (
        <div className='banner-slider-container'>
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
