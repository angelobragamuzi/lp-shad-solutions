import Image from "next/image";
import Reveal from "./Reveal";

const projects = [
    {
        name: "FallzsStore",
        category: "E-commerce Gamer",
        description:
            "Plataforma de vendas com catálogo gamer, jornada de compra direta e experiência visual moderna para aumentar conversão.",
        points: [
            "Catálogo organizado por interesse",
            "Página de produto com foco em decisão",
            "Fluxo de checkout simplificado",
        ],
        image: "/site1.png",
    },
    {
        name: "ShadFinnancy",
        category: "Aplicativo de Gestão Financeira",
        description:
            "App focado em ajudar pessoas a manterem um controle financeiro melhor, com visão clara da rotina e suporte para decisões.",
        points: [
            "Dashboards fáceis de ler para acompanhamento diário",
            "Agente de IA integrado para orientação financeira",
            "Simulador de cenários que gera plano financeiro personalizado em PDF",
        ],
        image: "/financa.png",
    },
    {
        name: "Roda20 Brasil",
        category: "Loja de Rodas",
        description:
            "Landing page comercial com posicionamento forte, vitrine de produtos e CTA visível para acelerar atendimento.",
        points: [
            "Seções objetivas para oferta",
            "Contato imediato no topo e no fechamento",
            "Design responsivo para mobile",
        ],
        image: "/roda20.png",
    },
    {
        name: "Buquê de Cacau",
        category: "Loja de Buquês de Luxo",
        description:
            "Landing page comercial com posicionamento forte, vitrine de produtos e CTA visível para acelerar atendimento.",
        points: [
            "Seções objetivas para oferta",
            "Contato imediato no topo e no fechamento",
            "Design responsivo para mobile",
        ],
        image: "/buque.png",
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <Reveal className="section-head">
                    <span className="eyebrow">Portfólio</span>
                    <h2>Projetos reais entregues para operações de verdade.</h2>
                    <p className="text-lg">
                        Cada case é construído para gerar impacto visual, clareza de
                        comunicação e crescimento.
                    </p>
                </Reveal>

                <div className="portfolio-list">
                    {projects.map((project, index) => (
                        <Reveal
                            as="article"
                            className="portfolio-card"
                            delay={index * 0.1}
                            key={project.name}
                        >
                            <div className="portfolio-media">
                                <Image
                                    src={project.image}
                                    alt={`${project.name} - ${project.category}`}
                                    width={1100}
                                    height={780}
                                />
                            </div>
                            <div className="portfolio-content">
                                <span className="portfolio-tag">{project.category}</span>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <ul className="portfolio-points">
                                    {project.points.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                                <a className="btn secondary" href="#contato">
                                    Quero um projeto assim
                                </a>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
