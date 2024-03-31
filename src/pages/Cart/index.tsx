import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { AddCartContext } from '../../context/AddCartContext'
import { useNavigate } from 'react-router-dom'

import Close from '../../Icons/Close'

import './styles.scss'

const Cart = () => {
    const navigate = useNavigate()

    const { addProductCart, setAddProductCart } = useContext(AddCartContext)

    const handleButtonBack = () => {
        navigate('/')
    }

    const handleRemoveItem = (id: number) => {
        if (id) {
            setAddProductCart(addProductCart.filter((item) => item.id !== id))
        }
    }

    const discount: number[] = []
    addProductCart.map((i) => {
        if (i.price.isDiscount) {
            discount.push(...discount, i.price.isDiscount)
        }
    })

    const amount: number[] = []
    addProductCart.map((i) => {
        if (i.price.amount && !i.price.isDiscount) {
            amount.push(i.price.amount)
        }
    })

    const totalDiscount = discount.length && discount.reduce((total, product) => total + product).toFixed(2)
    const totalAmount = amount.length && amount.reduce((total, product) => total + product).toFixed(2)

    const totalPurchase = Number(totalAmount) + Number(totalDiscount)

    return (
        <motion.div
            initial={{ opacity: 0.3, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className='cart-container'
        >
            <button className='cart-button-back' onClick={handleButtonBack}>
                Voltar
            </button>
            <h2 className='cart-title'>Minhas Compras</h2>

            <motion.div
                initial={{ opacity: 0.3, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.3 }}
            >
                {addProductCart.length ? (
                    addProductCart.map((product) => {
                        return (
                            <div key={product.id} className='cart-product-container'>
                                <img
                                    src={product.image}
                                    alt={`imagem do produto ${product.name}`}
                                    className='cart-product-image'
                                />
                                <p className='cart-name'>{product.name}</p>
                                <p className='cart-amount'>
                                    R${' '}
                                    {product.price.isDiscount
                                        ? product.price.isDiscount.toFixed(2)
                                        : product.price.amount.toFixed(2)}
                                </p>
                                <p className='cart-close' onClick={() => handleRemoveItem(product.id)}>
                                    <Close colorFill={'#f50000fe'} />
                                </p>
                            </div>
                        )
                    })
                ) : (
                    <motion.p
                        initial={{ opacity: 0.3, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.3 }}
                        className='cart-not-product'
                    >
                        Opss, Não tem nada no Carrinho
                    </motion.p>
                )}
            </motion.div>
            {addProductCart.length >= 1 && (
                <motion.div className='cart-container-total'>
                    <motion.p className='cart-total'>Total: R$ {totalPurchase.toFixed(2)}</motion.p>
                </motion.div>
            )}
        </motion.div>
    )
}
export default Cart
