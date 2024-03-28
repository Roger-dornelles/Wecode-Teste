import React, { useContext, useEffect, useState } from 'react'

import './styles.scss'
import IconMenu from '../../Icons/Icon_menu'
import IconSearch from '../../Icons/Icon_search'
import LogoBranco from '../../Icons/Logo_branco'
import LogoBlack from '../../Icons/Logo_preto'
import IconConta from '../../Icons/Icon_conta'
import IconCarrinho from '../../Icons/Icon_carrinho'

import Modal from './Modal'
import { AddCartContext } from '../../context/AddCartContext'
import { BannerModalType } from '../../types'

interface HeaderProps {
    windowHeight: number
    bannerModal: BannerModalType[]
}

const Header = ({ windowHeight, bannerModal }: HeaderProps) => {
    const [positionScroll, setPositionScroll] = useState(0)
    const [openMenu, setOpenMenu] = useState(false)

    const { addProductCart } = useContext(AddCartContext)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }
    useEffect(() => {
        setPositionScroll(windowHeight)
    }, [windowHeight])

    return (
        <>
            <nav className={positionScroll !== 0 ? 'headerScroll' : 'header'}>
                <Modal openModal={openMenu} bannerModal={bannerModal} />

                <ul className='navigation'>
                    <li onClick={handleOpenMenu}>
                        <IconMenu />
                    </li>

                    <li>
                        <IconSearch />
                    </li>
                </ul>

                <div>
                    <LogoBranco />
                </div>

                <ul className='navigation'>
                    <li>
                        <IconConta />
                    </li>

                    <li>
                        <IconCarrinho quantityProduct={addProductCart} />
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header
