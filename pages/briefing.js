import Head from "next/head";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BriefingFormSection from "../components/briefing/BriefingFormSection";

export default function BriefingPage() {
    useEffect(() => {
        document.body.classList.add("briefing-page-active");

        return () => {
            document.body.classList.remove("briefing-page-active");
        };
    }, []);

    return (
        <>
            <Head>
                <title>Iniciar Projeto | Shad Solutions</title>
                <meta
                    name="description"
                    content="Envie as informações iniciais da sua ideia para receber os próximos passos do projeto com a Shad Solutions."
                />
            </Head>

            <Header />
            <main className="briefing-page">
                <BriefingFormSection />
            </main>
            <Footer />
        </>
    );
}
