import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SystemsGrid from '../components/SystemsGrid'
import AIGrid from '../components/AIGrid'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <Head>
                <title>SS - Inteligência Aplicada</title>
                <link rel="icon" href="/images/icon-logo.svg" type="image/svg+xml" />
                <link rel="shortcut icon" href="/images/icon-logo.svg" />
                <meta name="theme-color" content="#0a0a0a" />
            </Head>

            <Header />
            <main>
                <Hero />
                <SystemsGrid />
                <AIGrid />
            </main>
            <Footer />
        </>
    )
}