import styled from '@emotion/styled'
import { isMobile, white } from 'styles/theme'

export const Header = styled.h2({
    margin: `0 0 60px`,
    color: white,
    fontWeight: 'lighter',
    fontSize: 64,
    lineHeight: 1.4,
    textAlign: 'center',
    [isMobile]: {
        fontSize: 48,
    },
})
