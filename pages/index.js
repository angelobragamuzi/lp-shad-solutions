import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FutureProductsSection from "../components/FutureProductsSection";
import Differentials from "../components/Differentials";
import HomePlansSection from "../components/HomePlansSection";
import ContactModal from "../components/ContactModal";
import Footer from "../components/Footer";

export default function Home() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <>
            <Head>
                <title>Shad Solutions | Tecnologia sem limites</title>
                <meta
                    name="description"
                    content="Landing pages, apps e software sob medida com identidade tech, foco em performance e escalabilidade real."
                />
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <meta name="theme-color" content="#0B0F1A" />
            </Head>

            <Header home onOpenContact={() => setIsContactModalOpen(true)} />
            <main className="home-page">
                <Hero />
                <Services />
                <Differentials />
                <FutureProductsSection />
                <HomePlansSection />
            </main>
            <Footer home />

            <ContactModal
                open={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
    );
}
