import React, { useEffect, useState } from 'react'
import './styles.scss'
import Header from '../../Components/Header'
import Banner from '../../Components/Banner'
import Categories from '../../Components/Categories'
import BannerNavigation from '../../Components/BannerNavigation'
import Releases from '../../Components/Realeases'
import Blog from '../../Components/Blog'
import Footer from '../../Components/Footer'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {
    getProductsBannerPrincipal,
    getProducts,
    getProductCategories,
    getBannerNavigation,
    getBlog,
    getBannerModal,
} from '../../utils'
import { BannersType, ProductType, CategoriesType, ReleaseType, BlogType, BannerModalType } from '../../types'

function App() {
    const [windowHeight, setWindowHeight] = useState(false)
    const [bannerModal, setBannerModal] = useState<BannerModalType[]>([])
    const [bannerPrincipal, setBannerPrincipal] = useState<ProductType[]>([])
    const [categories, setCategories] = useState<CategoriesType[]>([])
    const [bannerNavigation, setBannerNavigation] = useState<BannersType[]>([])
    const [releases, setReleases] = useState<ReleaseType[]>([])
    const [blogInfo, setBlogInfo] = useState<BlogType[]>([])

    const handleProductsBannerPrincipal = async () => {
        const product = await getProductsBannerPrincipal()
        if (product) {
            setBannerPrincipal(product)
        }
    }
    const handleGetBannerModal = async () => {
        const banner = await getBannerModal()

        if (banner) {
            setBannerModal(banner)
        }
    }

    const handleGetCategories = async () => {
        const categorie = await getProductCategories()
        if (categorie) {
            setCategories(categorie)
        }
    }

    const handleGetBannerNavigation = async () => {
        const banners = await getBannerNavigation()

        if (banners) {
            setBannerNavigation(banners)
        }
    }

    const handleReleases = async () => {
        const release = await getProducts()
        if (release) {
            setReleases(release)
        }
    }

    const handleGetBlog = async () => {
        const blog = await getBlog()

        if (blog) {
            setBlogInfo(blog)
        }
    }

    const handleScroll = () => {
        if (window.scrollY !== 0) {
            setWindowHeight(true)
        } else {
            setWindowHeight(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        handleProductsBannerPrincipal()
        handleGetBannerModal()
        handleGetCategories()
        handleGetBannerNavigation()
        handleReleases()
        handleGetBlog()
    }, [])

    return (
        <div className='app'>
            <Header windowHeight={windowHeight} bannerModal={bannerModal} />
            <Banner productBanner={bannerPrincipal} />
            <Categories categories={categories} />
            <BannerNavigation banners={bannerNavigation} />
            <Releases releases={releases} />
            <Blog blogInfo={blogInfo} />
            <Footer />
        </div>
    )
}

export default App
