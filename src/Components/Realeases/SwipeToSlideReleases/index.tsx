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
}

function SwipeToSlideReleases({ releases }: Props) {
    const settings = {
        className: 'center',
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 2,
        swipeToSlide: true,
    }

    const { setAddProductCart, addProductCart }: any = useContext(AddCartContext)
    const { addFavorite, setAddFavorite }: any = useContext(AddFavoriteContext)
    const [favorite, setFavorite] = useState({ id: 0, favorite: false })

    const handleAddCart = (release: ReleaseType) => {
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

        return (
            <div {...otherProps}>
                <div className='releases-container'>
                    <div className='releases-icon-favorite' onClick={() => handleAddFavorite(release)}>
                        {addFavorite.map((item: { id: number }) => {
                            if (item.id === release.id) {
                                return <IconFavoriteBlack key={item.id} />
                            }
                            return <IconFavorito key={item.id} />
                        })}
                        <IconFavorito />
                    </div>
                    <div className='releases-container-image'>
                        <img src={release.image} alt={`imagem categoria ${release.image}`} />
                    </div>
                    <div className='releases-icon-add' onClick={() => handleAddCart(release)}>
                        <IconAdicionar />
                    </div>
                </div>
                <p>{release.name}</p>
                {release.price.isDiscount ? (
                    <div className='releases-container-price'>
                        <del className='releases-delete'>R$ {release.price.amount.toFixed(2)}</del>
                        <p className='releases-description'>R$ {release.price.isDiscount.toFixed(2)}</p>
                    </div>
                ) : (
                    <p className='releases-description'>R$ {release.price.amount.toFixed(2)}</p>
                )}
            </div>
        )
    }

    return (
        <div className='slider-container'>
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
