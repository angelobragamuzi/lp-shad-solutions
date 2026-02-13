import Image from "next/image";
import Reveal from "./Reveal";
import projects from "./portfolioData";

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
                                <a className="btn secondary" href="/planos#formulario">
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
