import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import React, { ReactNode } from 'react'

interface ContainerProps {
    children?: ReactNode
    delay?: number
}

export const Container = ({ children, delay }: ContainerProps) => {
    return <Wrapper delay={delay}>{children}</Wrapper>
}

const fadeIn = keyframes({
    '0%': {
        opacity: 0,
    },
    '100%': {
        opacity: 1,
    },
})

export const Wrapper = styled.div<{ delay?: number }>(
    {
        padding: '50px',
        maxWidth: '1400px',
        margin: '0 auto',
    },
    ({ delay }) => ({
        animation: `${fadeIn} 600ms ease-in-out`,
        animationFillMode: 'both',
        animationDelay: `${delay}s`,
    }),
)
