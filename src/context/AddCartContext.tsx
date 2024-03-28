/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode, createContext, useState } from 'react'

interface InitialValueType {
    id: number
    image: string
    name: string
    price: {
        amount: number
        isDiscount: null | number
    }
    quantity: number
}

interface InitialValueContext {
    addProductCart: InitialValueType[]
    setAddProductCart: React.Dispatch<React.SetStateAction<InitialValueType[]>>
}

const InitialValueCart: InitialValueContext = {
    addProductCart: [],
    setAddProductCart: () => {},
}

export const AddCartContext = createContext(InitialValueCart)

interface Children {
    children: ReactNode
}

export const AddCartProvider = ({ children }: Children) => {
    const [addProductCart, setAddProductCart] = useState<InitialValueType[]>([])

    return (
        <AddCartContext.Provider value={{ addProductCart, setAddProductCart }}>
            {children}
        </AddCartContext.Provider>
    )
}
