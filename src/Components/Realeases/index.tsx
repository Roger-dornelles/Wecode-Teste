import React, { useState } from 'react'
import './styles.scss'

import SwipeToSlideReleases from './SwipeToSlideReleases'
import { ReleaseType } from '../../types'

interface ReleasesProps {
    releases: ReleaseType[]
}

const Index = ({ releases }: ReleasesProps) => {
    const [openWarningAdd, setWarningAdd] = useState<boolean>(false)

    const handleOpenWarning = (value) => {
        if (value) {
            setWarningAdd(value)
        }

        setTimeout(() => {
            setWarningAdd(false)
        }, 2500)
    }
    return (
        <div className='releases-container'>
            <p className='release-paragraph'>Lançamentos</p>
            <SwipeToSlideReleases releases={releases} handleOpenWarning={handleOpenWarning} />
            {openWarningAdd && <div className='release-warning'>Adicionado ao carrinho</div>}
        </div>
    )
}

export default Index
