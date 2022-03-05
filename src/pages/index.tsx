import styled from '@emotion/styled'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const Background = dynamic(() => import('../components/bg/Background'), { ssr: false })
const Logo = dynamic(() => import('../components/hero/Logo'), { ssr: false })

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Kacper Kozak - Front-end Developer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <Logo />
            </Container>
            <Background />
        </>
    )
}

export default Home

const Container = styled.main({
    padding: '50px',
    maxWidth: '1200px',
    margin: '0 auto',
})
