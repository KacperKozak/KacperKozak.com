import styled from '@emotion/styled'
import { Button } from 'components/buttons/Button'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import icon from '../assets/icon.svg'
import { Background } from '../components/bg/Background'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Kacper Kozak - Front-end Developer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <div>
                    <Image src={icon} width="200" height="200" alt="" />
                </div>
                <Title>Kacper Kozak</Title>
                <Button label="Hello" />
            </Container>
            <Background />
        </>
    )
}

export default Home

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
