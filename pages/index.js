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
                <link rel="icon" href="/images/icon-logo.svg" type="image/svg+xml" />
                <link rel="shortcut icon" href="/images/icon-logo.svg" />
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
