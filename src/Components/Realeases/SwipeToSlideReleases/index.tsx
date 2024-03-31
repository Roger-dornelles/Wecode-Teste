/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react'
import Slider from 'react-slick'
import './styles.scss'

import IconAdicionar from '../../../Icons/Icon_adicionar'
import IconFavorito from '../../../Icons/Icon_favorito'
import IconFavoriteBlack from '../../../Icons/Icon_favorite_black'

import { AddCartContext } from '../../../context/AddCartContext'
import { AddFavoriteContext } from '../../../context/AddFavoritesContext'
import { ReleaseType } from '../../../types'

interface Props {
    releases: ReleaseType[]
    handleOpenWarning: (value: boolean) => void
}

function SwipeToSlideReleases({ releases, handleOpenWarning }: Props) {
    const settings = {
        dots: true,
        className: 'center',
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide: true,
        speed: 300,

        appendDots: (dots) => (
            <div>
                <ul style={{ margin: '-18px 0px' }}> {dots} </ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    }

    const { setAddProductCart, addProductCart } = useContext(AddCartContext)
    const { addFavorite, setAddFavorite } = useContext(AddFavoriteContext)
    const [, setFavorite] = useState({ id: 0, favorite: false })

    const productAdded = { id: 0, productAdded: false }

    const handleAddCart = (release: ReleaseType) => {
        handleOpenWarning(true)
        const itemExists = addProductCart?.some((cartItem: { id: number }) => cartItem.id === release.id)

        if (!itemExists) {
            setAddProductCart([
                ...addProductCart,
                {
                    id: release.id,
                    name: release.name,
                    image: release.image,
                    price: {
                        amount: release.price.amount,
                        isDiscount: release.price.isDiscount,
                    },
                    quantity: 1,
                },
            ])
            productAdded.id = release.id
            productAdded.productAdded = true
        } else {
            setAddProductCart(
                addProductCart.filter((item: { id: number; quantity: number }) => {
                    if (item.id === release.id) {
                        item.quantity += 1
                    }
                    return item
                }),
            )
        }
    }

    const handleAddFavorite = (release: ReleaseType) => {
        const isFavorite = addFavorite.some((cartItem: { id: number }) => cartItem.id === release.id)

        if (!isFavorite) {
            setFavorite({ id: release.id, favorite: true })
            setAddFavorite([
                ...addFavorite,
                {
                    id: release.id,
                    name: release.name,
                    image: release.image,
                    price: {
                        amount: release.price.amount,
                        isDiscount: release.price.isDiscount,
                    },
                    favorite: true,
                },
            ])
        } else {
            setFavorite({ id: release.id, favorite: false })
            setAddFavorite(
                addFavorite.filter((item: { id: number }) => {
                    return item.id !== release.id
                }),
            )
        }
    }

    const CustomRelease = (props: { release: ReleaseType }) => {
        const { release, ...otherProps } = props
        const icon = { active: false, icon: <IconFavorito /> }

        addFavorite.map((item) => {
            if (item.id === release.id) {
                icon.active = true
                icon.icon = <IconFavoriteBlack />
                return
            }
        })

        const differenceInValues = release.price.isDiscount && release.price.amount - release.price.isDiscount
        const divisionOfValues = differenceInValues && differenceInValues / release.price.amount

        const percentage = divisionOfValues && divisionOfValues * 100

        const IsDiscount = {
            isDiscount: false,
            value: '',
        }
        if (percentage) {
            IsDiscount.isDiscount = true
            IsDiscount.value = percentage?.toPrecision(2)
        }
        return (
            <div {...otherProps}>
                <div className='releases-slide-container'>
                    <div className='releases-icon-favorite' onClick={() => handleAddFavorite(release)}>
                        {icon.active ? (
                            <p className='shoes-icon'>{icon.icon}</p>
                        ) : (
                            <p className='shoes-icon'>
                                <IconFavorito />
                            </p>
                        )}
                    </div>

                    <div className='releases-container-image'>
                        <img src={release.image} alt={`imagem categoria ${release.image}`} />
                        <div className='release-discount'>
                            {`${IsDiscount.isDiscount ? `${IsDiscount.value}% OFF` : ''}`}
                        </div>
                    </div>

                    <div className='releases-icon-add ' onClick={() => handleAddCart(release)}>
                        <p className='shoes-icon'>
                            <IconAdicionar />
                        </p>
                    </div>
                </div>
                <div className='releases-information'>
                    <p className='releases-paragraph'>{release.name}</p>

                    {release.price.isDiscount ? (
                        <div className='releases-container-price'>
                            <del className='releases-delete'>R$ {release.price.amount.toFixed(2)}</del>
                            <p className='releases-description'>R$ {release.price.isDiscount.toFixed(2)}</p>
                        </div>
                    ) : (
                        <p className='releases-description-amount'>R$ {release.price.amount.toFixed(2)}</p>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className='releases-slider-container'>
            <Slider {...settings}>
                {releases &&
                    releases.map((item) => {
                        return <CustomRelease release={item} key={item.id} />
                    })}
            </Slider>
        </div>
    )
}

export default SwipeToSlideReleases
