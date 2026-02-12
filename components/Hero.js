import Image from "next/image";
import Reveal from "./Reveal";

const highlights = [
    "Arquitetura orientada a performance",
    "Design funcional com foco em conversão",
    "Entrega com suporte técnico contínuo",
];

const projects = [
    { name: "FallzsStore", type: "E-commerce Gamer", image: "/site1.png" },
    { name: "Roda20 Brasil", type: "Landing Page", image: "/roda20.png" },
];

export default function Hero() {
    return (
        <section className="hero" id="topo">
            <div className="container hero-inner">
                <Reveal as="span" className="eyebrow hero-kicker" delay={0.05}>
                    SS Soluções Digitais
                </Reveal>

                <Reveal as="h1" className="hero-title" delay={0.1}>
                    Tecnologia sob medida para empresas que querem crescer com autoridade.
                </Reveal>

                <Reveal as="p" className="hero-subtitle" delay={0.16}>
                    Criamos landing pages, apps mobile e softwares personalizados para
                    transformar operação, posicionamento e vendas.
                </Reveal>

                <Reveal className="hero-cta" delay={0.22}>
                    <a
                        className="btn primary"
                        href="/planos#formulario"
                    >
                        Solicitar orçamento
                    </a>
                    <a className="btn secondary" href="#portfolio">
                        Ver portfólio
                    </a>
                </Reveal>

                <Reveal as="div" className="hero-previews" delay={0.28}>
                    {projects.map((project, index) => (
                        <article className="hero-preview-card" key={project.name}>
                            <div className="hero-preview-media">
                                <Image
                                    src={project.image}
                                    alt={`${project.name} - ${project.type}`}
                                    width={880}
                                    height={560}
                                    priority={index === 0}
                                />
                            </div>
                            <div className="hero-preview-copy">
                                <strong>{project.name}</strong>
                                <span>{project.type}</span>
                            </div>
                        </article>
                    ))}
                </Reveal>

                <Reveal as="ul" className="hero-highlights" delay={0.34}>
                    {highlights.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </Reveal>
            </div>
        </section>
    );
}
