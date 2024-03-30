import React from 'react'

import './styles.scss'

import LogoFooter from '../../Icons/LogoFooter'
import Instagram from '../../Icons/Instagram'
import Facebook from '../../Icons/Facebook'
import Twitter from '../../Icons/Twitter'
import TikTok from '../../Icons/TikTok'

const Index = () => {
    return (
        <div className='footer-container'>
            <div className='footer-logo'>
                <LogoFooter />
            </div>
            <div className='footer-socials-container'>
                <div className='footer-socials'>
                    <p className='socials'>
                        <Instagram />
                    </p>

                    <p className='socials'>
                        <Facebook />
                    </p>

                    <p className='socials'>
                        <Twitter />
                    </p>

                    <p className='socials'>
                        <TikTok />
                    </p>
                </div>
            </div>

            <div className='footer-company'>
                <p>Sobre a empresa</p>
                <a href='#' className='footer-link'>
                    Quem somos
                </a>
                <a href='#' className='footer-link'>
                    Fale conosco
                </a>
            </div>

            <div className='footer-policy'>
                <p>Políticas</p>

                <a href='#' className='footer-link'>
                    Política de Privacidade
                </a>
                <a href='#' className='footer-link'>
                    Termos de Uso
                </a>
                <a href='#' className='footer-link'>
                    Política de Entrega
                </a>
                <a href='#' className='footer-link'>
                    Política de Cupom e Descontos
                </a>
            </div>
        </div>
    )
}

export default Index
