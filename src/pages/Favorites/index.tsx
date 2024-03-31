import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import './styles.scss'

import { AddFavoriteContext } from '../../context/AddFavoritesContext'

import Close from '../../Icons/Close'

const Favorites = () => {
    const navigate = useNavigate()

    const { addFavorite, setAddFavorite } = useContext(AddFavoriteContext)

    const handleButtonBack = () => {
        navigate('/')
    }

    const handleRemoveFavorite = (id: number) => {
        if (id) {
            setAddFavorite(addFavorite.filter((item) => item.id !== id))
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0.3, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className='favorites-container'
        >
            <button className='favorites-button-back' onClick={handleButtonBack}>
                Voltar
            </button>
            <h2 className='favorites-title'>Meus Favoritos</h2>

            <motion.div
                initial={{ opacity: 0.3, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2.3 }}
                className='favorites-container'
            >
                {addFavorite.length >= 1 ? (
                    addFavorite.map((favorite) => {
                        return (
                            <div key={favorite.id} className='favorite-container-description '>
                                <div
                                    className='favorite-close'
                                    onClick={() => handleRemoveFavorite(favorite.id)}
                                >
                                    <Close colorFill='#ec0202c8' />
                                </div>
                                <img
                                    src={favorite.image}
                                    alt={'imagem do ' + favorite.name}
                                    className='favorite-container-image'
                                />
                                <p>{favorite.name}</p>
                                <div>
                                    {favorite.price.isDiscount ? (
                                        <div className='favorite-description-price'>
                                            <del className='favorite-description-price-del'>
                                                R$ {favorite.price.amount.toFixed(2)}
                                            </del>
                                            <p className=''>R$ {favorite.price.isDiscount.toFixed(2)}</p>
                                        </div>
                                    ) : (
                                        <p className='favorite-description-price-p'>
                                            R$ {favorite.price.amount.toFixed(2)}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <motion.div
                        initial={{ opacity: 0.3, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2.3 }}
                        className='favorite-not-favorite'
                    >
                        <p>Opss, Você ainda não tem um favorito</p>
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    )
}

export default Favorites
