import React from 'react'
import { BlogType } from '../../types'

import './styles.scss'

import SlideBlog from './SlideBlog'

interface BlogProps {
    blogInfo: BlogType[]
}
const Blog = ({ blogInfo }: BlogProps) => {
    return (
        <div className='container'>
            <div className='blog-container'>
                <h3 className='blog-title'>Conheça mais</h3>
                <p className='blog-description'>Fique por dentro de tudo que acontece na Bebecê.</p>
            </div>

            <SlideBlog blogInfo={blogInfo} />
        </div>
    )
}
export default Blog
