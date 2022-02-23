import { Button } from 'components/buttons/Button'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import bg from '../assets/bg.png'
import icon from '../assets/icon.svg'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Kacper Kozak - Front-end Developer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <BgWrapper>
                <Image src={bg} layout="fill" objectFit="cover" />
            </BgWrapper>
            <Container>
                <div>
                    <Image src={icon} width="200" height="200" alt="" />
                </div>
                <Title>Kacper Kozak</Title>
                <Button label="Hello" />
            </Container>
        </>
    )
}

export default Home

const BgWrapper = styled.div({
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    zIndex: -1,
})

const Container = styled.main({
    padding: '50px',
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})

const Title = styled.h1({
    fontWeight: 'lighter',
    fontSize: 67,
})
