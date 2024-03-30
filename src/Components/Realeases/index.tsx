import React from 'react'
import './styles.scss'

import SwipeToSlideReleases from './SwipeToSlideReleases'
import { ReleaseType } from '../../types'

interface ReleasesProps {
    releases: ReleaseType[]
}

const Index = ({ releases }: ReleasesProps) => {
    return (
        <div className='releases-container'>
            <p className='release-paragraph'>Lançamentos</p>
            <SwipeToSlideReleases releases={releases} />
        </div>
    )
}

export default Index
