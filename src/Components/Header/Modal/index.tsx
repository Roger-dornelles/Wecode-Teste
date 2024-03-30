import React, { useState, useEffect } from 'react'

import IconClose from '../../../Icons/Close'
// import BannerModal from '../../../images/Banner-modal.png'
import LogoBlack from '../../../Icons/Logo_preto'
import Arrow from '../../../Icons/Arrow'
import './styles.scss'
import { BannerModalType } from '../../../types'

interface ModalProps {
    openModal: boolean
    bannerModal: BannerModalType[]
}

const Modal = ({ openModal, bannerModal }: ModalProps) => {
    const [openMenu, setOpenMenu] = useState(false)
    const [shoes, setShoes] = useState(false)

    useEffect(() => {
        setOpenMenu(openModal)
    }, [openModal])

    return (
        <div className={openMenu ? 'modal-open' : 'modal-close'}>
            <div className='modal-header'>
                <div className='logo-modal'>
                    <LogoBlack />
                </div>

                <div className='close-modal' onClick={() => setOpenMenu(false)}>
                    <IconClose />
                </div>
            </div>

            <div>
                <img src={`${bannerModal.map((i) => i.image)}`} alt='banner do modal' />
            </div>

            <nav className='description'>
                <div onClick={() => setShoes(!shoes)} className='shoes-menu'>
                    <p className='shoes-title'>Sapatos</p>
                    <p className={!shoes ? 'arrow' : ''}>
                        <Arrow />
                    </p>
                </div>
                {shoes && (
                    <ul className='shoes'>
                        <li>Scarpins</li>
                        <li>Mocassim</li>
                        <li>Sapatilhas</li>
                        <li>Mules</li>
                        <li>Peer Tope</li>
                        <li>Oxford</li>
                    </ul>
                )}

                <div className='shoes-menu'>
                    <p>Sandalias</p>
                    <p className={!shoes ? 'arrow' : ''}>
                        <Arrow />
                    </p>
                </div>

                <div className='shoes-menu'>
                    <p>Botas</p>
                    <p className={!shoes ? 'arrow' : ''}>
                        <Arrow />
                    </p>
                </div>

                <div className='shoes-menu'>
                    <p>Tenis</p>
                    <p className={!shoes ? 'arrow' : ''}>
                        <Arrow />
                    </p>
                </div>

                <div className='shoes-menu shoes-menu-red'>
                    <p>Outlet</p>
                </div>
            </nav>
        </div>
    )
}

export default Modal
