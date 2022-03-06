import styled from '@emotion/styled'
import Background from 'components/bg/Background'
import { useHeroAnimation } from 'components/hero/useHeroAnimation'
import Head from 'next/head'
import React, { ReactNode } from 'react'
import Logo from './Logo'

interface HeroProps {
    children?: ReactNode
}

export const Hero = ({ children }: HeroProps) => {
    const anim = useHeroAnimation()
    return (
        <>
            <Head>
                <title>Kacper Kozak - Front-end Developer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <Logo anim={anim} />
                {children}
            </Container>
            <Background enabled={anim.startBg} ref={anim.refs.bgRef} />
        </>
    )
}

export default Hero

const Container = styled.main({
    padding: '50px',
    maxWidth: '1200px',
    margin: '0 auto',
})
