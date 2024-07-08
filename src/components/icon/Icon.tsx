import styled from '@emotion/styled'
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

    return (
        <Container>
            <Component />
        </Container>
    )
}

const Container = styled.div({
    width: 24,
    height: 24,
    'path': {
        stroke: 'currentColor',
    },
})
