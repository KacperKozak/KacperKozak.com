import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { isMobile } from 'styles/theme'

interface ColumnsProps {
    children: ReactNode
}

export const Columns = ({ children }: ColumnsProps) => {
    return <Container>{children}</Container>
}

const Container = styled.div({
    display: 'grid',
    gridAutoFlow: 'column',
    gridAutoColumns: '1fr',
    gridGap: 60,
    [isMobile]: {
        gridAutoFlow: 'row',
    },
})
