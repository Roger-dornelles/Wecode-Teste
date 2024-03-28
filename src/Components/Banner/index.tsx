import React from 'react'

import Slide from './Slide'

import './styles.scss'
import { ProductType } from '../../types'

interface Props {
    productBanner: ProductType[]
}

const Index = ({ productBanner }: Props) => {
    return (
        <div className='imagem'>
            <Slide products={productBanner} />
        </div>
    )
}

export default Index
