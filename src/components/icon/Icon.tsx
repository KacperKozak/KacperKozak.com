import React from 'react'
import ChevronRight from './icons/chevron-right.svg'
import GitHub from './icons/github.svg'

const icons = {
    GitHub,
    ChevronRight,
}

interface IconProps {
    name: keyof typeof icons
}

export const Icon = ({ name }: IconProps) => {
    const Component = icons[name]

    return <Component />
}
