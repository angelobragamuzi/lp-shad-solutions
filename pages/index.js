import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/SystemsGrid";
import Differentials from "../components/Differentials";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Shad Solutions | SS Soluções Digitais</title>
                <meta
                    name="description"
                    content="Software sob medida, landing pages e apps mobile para empresas que querem crescer com tecnologia."
                />
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <meta name="theme-color" content="#050506" />
            </Head>

            <Header />
            <main>
                <Hero />
                <Services />
                <Portfolio />
                <Differentials />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
