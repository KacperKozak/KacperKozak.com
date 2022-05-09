import styled from '@emotion/styled'
import React, { ReactNode } from 'react'
import { white } from 'styles/theme'

interface HeaderProps {
    children?: ReactNode
}

export const Header = ({ children }: HeaderProps) => {
    return <Container>{children}</Container>
}

const Container = styled.h2({
    margin: `0 0 60px`,
    color: white,
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: 64,
    lineHeight: 1.4,
    textAlign: 'center',
})
