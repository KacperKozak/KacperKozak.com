import styled from '@emotion/styled'
import { isMobile } from 'styles/theme'
import { Signet } from './Signet'
import { useHeroAnimation } from './useHeroAnimation'

interface LogoProps {
    animation: ReturnType<typeof useHeroAnimation>
}

export const Logo = ({ animation }: LogoProps) => {
    const {
        refs: { titleRef, topLineRef, leftLineRef, rightLineRef, signetRef },
    } = animation

    return (
        <>
            <Title ref={titleRef}>Kacper Kozak</Title>
            <Container>
                <TopLine ref={topLineRef} />
                <LeftLine ref={leftLineRef} />
                <RightLine ref={rightLineRef} />
                <Signet ref={signetRef} />
            </Container>
        </>
    )
}

const Container = styled.header({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,
})

const Title = styled.h1({
    fontWeight: 'lighter',
    textAlign: 'center',
    paddingBottom: 50,
    letterSpacing: '0.1em',
    fontSize: 72,
    [isMobile]: {
        fontSize: 48,
    },
})

const Line = styled.div({
    position: 'absolute',
    top: 0,
    bottom: 0,
    margin: 'auto',
    backgroundColor: 'currentColor',
    borderRadius: 3,
    height: 3,
    opacity: 0.5,
})

const offset = 'calc(50% + 70px)'

const LeftLine = styled(Line)({
    right: offset,
    left: 0,
    transformOrigin: 'right',
})

const RightLine = styled(Line)({
    left: offset,
    right: 0,
    transformOrigin: 'left',
})

const TopLine = styled(Line)({
    left: 0,
    right: 0,
    bottom: 'calc(100% + 20px)',
    top: 'auto',
    width: 3,
    height: 50,
    transformOrigin: 'bottom',
})

export default Logo
