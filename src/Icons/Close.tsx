import React from 'react'

interface CloseProps {
    colorFill?: string
}

const Close = ({ colorFill }: CloseProps) => {
    return (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect width='24' height='24' fill='#EEEEEE' />
            <path
                d='M16 8.47133L15.5287 8L12 11.5287L8.47133 8L8 8.47133L11.5287 12L8 15.5287L8.47133 16L12 12.4713L15.5287 16L16 15.5287L12.4713 12L16 8.47133Z'
                fill={colorFill ? colorFill : '#1D1D1D'}
            />
        </svg>
    )
}
export default Close
