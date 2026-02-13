import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import ShadManagerSection from "../components/ShadManagerSection";

export default function ShadManagerPage() {
    return (
        <>
            <Head>
                <title>ShadManager | Shad Solutions</title>
                <meta
                    name="description"
                    content="Conheça o ShadManager, o software para empresas e autônomos gerenciarem mensalidades, pagamentos e inadimplência com dashboards intuitivos."
                />
            </Head>

            <Header />
            <main>
                <section className="plans-hero" id="topo">
                    <div className="container">
                        <Reveal className="plans-hero-inner">
                            <span className="eyebrow">Produto</span>
                            <h1>ShadManager: gestão simples para mensalidades e pagamentos.</h1>
                            <p className="text-lg">
                                Controle recorrências, acompanhe indicadores e cobre inadimplentes
                                com um sistema direto ao ponto.
                            </p>
                            <p className="plans-hero-note">
                                Ideal para empresas e autônomos que precisam de previsibilidade
                                financeira e operação organizada.
                            </p>
                            <div className="hero-cta">
                                <a className="btn primary" href="/planos#formulario">
                                    Solicitar demonstração
                                </a>
                                <a className="btn secondary" href="/#contato">
                                    Falar com especialista
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <ShadManagerSection />
            </main>
            <Footer />
        </>
    );
}
