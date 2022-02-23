/// <reference types="next/image-types/global" />

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import icon from '../assets/icon.svg'
import { Button } from '../components/buttons/Button'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Kacper Kozak - Front-end Developer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div>
                    <Image src={icon} width="200" height="200" alt="" />
                </div>
                <h1 className={styles.title}>Kacper Kozak</h1>
                <Button label="Hello" />
            </main>
        </div>
    )
}

export default Home
