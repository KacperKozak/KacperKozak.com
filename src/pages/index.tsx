import { GitHubLink } from 'components/github/GitHubLink'
import { Columns } from 'components/layout/Columns'
import { Container } from 'components/layout/Container'
import { Header } from 'components/typography/Header'
import { repositories } from 'data/repositories'
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

            <Container delay={1.5}>
                <Header>Open source</Header>
                <Columns>
                    {repositories.map((repository) => (
                        <GitHubLink key={repository.url} repository={repository} />
                    ))}
                </Columns>
            </Container>
        </>
    )
}

export default Home
