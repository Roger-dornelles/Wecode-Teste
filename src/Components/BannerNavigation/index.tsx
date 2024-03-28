import React from 'react'

import './styles.scss'
import { BannersType } from '../../types'

interface Props {
    banners: BannersType[]
}

const Index = ({ banners }: Props) => {
    return (
        <>
            {banners &&
                banners.map((banner, index: React.Key) => {
                    return (
                        <div className='banner-container' key={index}>
                            <img src={banner.image} alt={'banner de navegação'} className='banner-image' />
                        </div>
                    )
                })}
        </>
    )
}

export default Index
