import type { NextPage } from 'next'
import Head from 'next/head'
import icon from '../assets/icon.svg'
import styles from '../styles/Home.module.css'

console.log(icon)

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Kacper Kozak - Front-end Developer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div>
                    <img src={icon.src} width="200" alt="" />
                </div>
                <h1 className={styles.title}>Kacper Kozak</h1>
            </main>
        </div>
    )
}

export default Home
