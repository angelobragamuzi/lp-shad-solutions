import Reveal from "./Reveal";
import PortfolioCarousel from "./PortfolioCarousel";

const highlights = [
    "Arquitetura orientada a performance",
    "Design funcional com foco em conversão",
    "Entrega com suporte técnico contínuo",
];

export default function Hero() {
    return (
        <section className="hero" id="topo">
            <div className="container hero-inner">
                <Reveal className="hero-content" delay={0.05}>
                    <span className="eyebrow hero-kicker">SS Soluções Digitais</span>
                    <h1 className="hero-title">
                        Tecnologia sob medida para empresas que querem crescer com
                        autoridade.
                    </h1>
                    <p className="hero-subtitle">
                        Criamos landing pages, apps mobile e softwares personalizados
                        para transformar operação, posicionamento e vendas.
                    </p>
                    <div className="hero-cta">
                        <a className="btn primary" href="/planos#formulario">
                            Solicitar orçamento
                        </a>
                        <a className="btn secondary" href="/portfolio">
                            Ver portfólio
                        </a>
                    </div>
                </Reveal>

                <Reveal as="div" className="hero-showcase" delay={0.18}>
                    <PortfolioCarousel />
                </Reveal>

                <Reveal as="ul" className="hero-highlights" delay={0.24}>
                    {highlights.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </Reveal>
            </div>
        </section>
    );
}
