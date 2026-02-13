import Head from "next/head";
import Header from "../components/Header";
import Portfolio from "../components/SystemsGrid";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export default function PortfolioPage() {
    return (
        <>
            <Head>
                <title>Portfólio | Shad Solutions</title>
                <meta
                    name="description"
                    content="Veja projetos e cases entregues pela Shad Solutions com foco em performance e resultado."
                />
            </Head>

            <Header />
            <main>
                <section className="plans-hero" id="topo">
                    <div className="container">
                        <Reveal className="plans-hero-inner">
                            <span className="eyebrow">Portfólio</span>
                            <h1>Projetos que geram resultado real.</h1>
                            <p className="text-lg">
                                Cases com foco em conversão, experiência e posicionamento
                                digital.
                            </p>
                            <p className="plans-hero-note">
                                Cada entrega é pensada para performance visual e impacto
                                comercial.
                            </p>
                            <div className="hero-cta">
                                <a className="btn primary" href="/planos#formulario">
                                    Solicitar orçamento
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <Portfolio />
            </main>
            <Footer />
        </>
    );
}
