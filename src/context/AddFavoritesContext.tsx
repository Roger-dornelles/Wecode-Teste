/* eslint-disable @typescript-eslint/no-empty-function */
import { ReactNode, SetStateAction, createContext, useState } from 'react'

interface InitialValueType {
    id: number
    name: string
    image: string
    price: {
        amount: number
        isDiscount: null | number
    }
    favorite: boolean
}

interface InitialValueContext {
    addFavorite: InitialValueType[]
    setAddFavorite: React.Dispatch<React.SetStateAction<InitialValueType[]>>
}

const initialValueFavorite: InitialValueContext = {
    addFavorite: [],
    setAddFavorite: () => {},
}

export const AddFavoriteContext = createContext(initialValueFavorite)
interface ChildrenProps {
    children: ReactNode
}

export const AddFavoriteProvider = ({ children }: ChildrenProps) => {
    const [addFavorite, setAddFavorite] = useState<InitialValueType[]>([])
    return (
        <AddFavoriteContext.Provider value={{ addFavorite, setAddFavorite }}>
            {children}
        </AddFavoriteContext.Provider>
    )
}
