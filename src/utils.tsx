import { BannerModalType, BannersType, BlogType, CategoriesType, ProductType, ReleaseType } from './types'

export function getProducts(): Promise<ReleaseType[]> {
    return new Promise((res) => {
        res([
            {
                name: 'Scarpin Sligback Bebecê Salto Médio Taça Detalhe Metalizado',
                image: './static/images/produtos/produto-1.png',
                price: { amount: 179.9, isDiscount: null },
                id: 1,
            },
            {
                name: 'Coturno Feminino Bebecê Tratorado Detalhe Tachas',
                image: './static/images/produtos/produto-2.png',
                price: { amount: 349.9, isDiscount: 315 },
                id: 2,
            },
            {
                name: 'Scarpin Bebecê Salto Alto Taça Com Fivela',
                image: './static/images/produtos/produto-3.png',
                price: { amount: 159.9, isDiscount: null },
                id: 3,
            },
        ])
    })
}

export function getBannerModal(): Promise<BannerModalType[]> {
    return new Promise((res) => {
        res([{ id: 1, image: './static/images/produtos/Banner-modal.png' }])
    })
}

export function getProductsBannerPrincipal(): Promise<ProductType[]> {
    return new Promise((res) => {
        res([
            {
                image: './static/images/produtos/banner-1.jpg',
                id: 1,
            },
            {
                image: './static/images/produtos/banner-2.jpg',
                id: 2,
            },
            {
                image: './static/images/produtos/banner-3.jpg',
                id: 3,
            },
        ])
    })
}

export function getProductCategories(): Promise<CategoriesType[]> {
    return new Promise((res) => {
        res([
            {
                id: 1,
                categorie: 'Botas',
                image: './static/images/produtos/banner-botas.png',
            },
            {
                id: 2,
                categorie: 'Scarpins',
                image: './static/images/produtos/banner-scarpins.png',
            },
            {
                id: 3,
                categorie: 'Sapatilhas',
                image: './static/images/produtos/banner-sapatilhas.png',
            },
            {
                id: 4,
                categorie: 'Sandalias',
                image: './static/images/produtos/banner-sandalias.png',
            },
        ])
    })
}

export function getBannerNavigation(): Promise<BannersType[]> {
    return new Promise((res) => {
        res([
            { id: 1, image: './static/images/produtos/banner-pequeno.png' },
            { id: 2, image: './static/images/produtos/banner-grande.png' },
        ])
    })
}

export function getBlog(): Promise<BlogType[]> {
    return new Promise((res) => {
        return res([
            { id: 1, image: './static/images/produtos/Frame-22.png' },
            { id: 2, image: './static/images/produtos/Frame-28.png' },
            { id: 3, image: './static/images/produtos/Frame-29.png' },
        ])
    })
}
