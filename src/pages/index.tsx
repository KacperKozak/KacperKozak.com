import styled from '@emotion/styled'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const Hero = dynamic(() => import('../components/hero/Hero'), { ssr: false })

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Kacper Kozak - Front-end Developer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
        </>
    )
}

export default Home
