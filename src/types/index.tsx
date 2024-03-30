export interface ProductType {
    image: string
    id: number
}

export interface BannerModalType {
    id: number
    image: './static/images/produtos/Banner-modal.png'
}

export interface BannersType {
    map?(arg0: (banner: { image: string | undefined }) => import('react/jsx-runtime').JSX.Element): unknown
    id: number
    image: string
}

export interface CategoriesType {
    id: number
    categorie: string
    image: string
}

export interface ReleaseType {
    id: number
    image: string
    name: string
    price: {
        amount: number
        isDiscount: null | number
    }
}

export interface BlogType {
    id: number
    image: string
    title: string
    description: string
}
