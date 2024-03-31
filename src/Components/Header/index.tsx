import React, { useContext, useEffect, useState } from 'react'

import './styles.scss'
import IconMenu from '../../Icons/Icon_menu'
import IconSearch from '../../Icons/Icon_search'
import LogoBranco from '../../Icons/Logo_branco'
import LogoBlack from '../../Icons/Logo_preto'
import IconConta from '../../Icons/Icon_conta'
import IconCarrinho from '../../Icons/Icon_carrinho'
import IconCarrinhoBlack from '../../Icons/IconCarrinhoBlack'
import IconContaBlack from '../../Icons/IconContaBlack'
import IconMenuBlack from '../../Icons/IconMenuBlack'
import IconSearchBlack from '../../Icons/IconSearchBlack'

import Modal from './Modal'
import { AddCartContext } from '../../context/AddCartContext'
import { BannerModalType } from '../../types'
import { useNavigate } from 'react-router-dom'

interface HeaderProps {
    windowHeight: boolean
    bannerModal: BannerModalType[]
}

const Header = ({ windowHeight, bannerModal }: HeaderProps) => {
    const [positionScroll, setPositionScroll] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)

    const { addProductCart } = useContext(AddCartContext)

    const navegate = useNavigate()

    const handleButtonCart = () => {
        navegate('/Compras')
    }

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    useEffect(() => {
        setPositionScroll(windowHeight)
    }, [windowHeight])

    return (
        <>
            <nav className={positionScroll ? 'headerScroll' : 'header'}>
                <Modal openModal={openMenu} bannerModal={bannerModal} />

                <ul className={'navigation'}>
                    <li onClick={handleOpenMenu}>{positionScroll ? <IconMenuBlack /> : <IconMenu />}</li>

                    <li>{positionScroll ? <IconSearchBlack /> : <IconSearch />}</li>
                </ul>

                <div>{positionScroll ? <LogoBlack /> : <LogoBranco />}</div>

                <ul className='navigation'>
                    <li>{positionScroll ? <IconContaBlack /> : <IconConta />}</li>

                    <li>
                        {positionScroll ? (
                            <div data-cy="cart-black" onClick={handleButtonCart}>
                                <IconCarrinhoBlack quantityProduct={addProductCart} />
                            </div>
                        ) : (
                            <div data-cy="cart-white"  onClick={handleButtonCart}>
                                <IconCarrinho quantityProduct={addProductCart} />
                            </div>
                        )}
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header
