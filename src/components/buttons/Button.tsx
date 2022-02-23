import styled from '@emotion/styled'
import React from 'react'

interface ButtonProps {
    label: string
}

export const Button = ({ label }: ButtonProps) => {
    return <Container>{label}</Container>
}

const Container = styled.button({
    backgroundColor: 'black',
    border: '1px solid #ccc',
    color: 'white',
    padding: '10px 20px',
})
