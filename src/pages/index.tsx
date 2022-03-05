import styled from '@emotion/styled'
import { Button } from 'components/buttons/Button'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import icon from '../assets/icon.svg'

const Background = dynamic(() => import('../components/bg/Background'), { ssr: false })

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Kacper Kozak - Front-end Developer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <Image src={icon} width="200" height="200" alt="" />
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
