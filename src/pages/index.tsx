import { GitHubLink } from 'components/github/GitHubLink'
import { Columns } from 'components/layout/Columns'
import { Container } from 'components/layout/Container'
import { Header } from 'components/typography/Header'
import { getPinnedRepositories, PinnedRepository } from 'data/repositories'
import type { GetStaticProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const Hero = dynamic(() => import('../components/hero/Hero'), { ssr: false })

interface IndexProps {
    pinnedRepositories: PinnedRepository[]
}

const Home: NextPage<IndexProps> = ({ pinnedRepositories }) => {
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
                    {pinnedRepositories.map((repository) => (
                        <GitHubLink key={repository.id} repository={repository} />
                    ))}
                </Columns>
            </Container>
        </>
    )
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
    const pinnedRepositories = await getPinnedRepositories(3)

    return {
        props: { pinnedRepositories },
        revalidate: 60 * 60, // 1 hour
    }
}

export default Home
