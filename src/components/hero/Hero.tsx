import { Background } from 'components/bg/Background'
import { useHeroAnimation } from 'components/hero/useHeroAnimation'
import { Container } from 'components/layout/Container'
import { ReactNode } from 'react'
import Logo from './Logo'

interface HeroProps {
    children?: ReactNode
}

export const Hero = ({ children }: HeroProps) => {
    const anim = useHeroAnimation()

    return (
        <>
            <Container>
                <Logo animation={anim} />
                {children}
            </Container>
            <Background enabled={anim.startBg} ref={anim.refs.bgRef} />
        </>
    )
}

export default Hero
