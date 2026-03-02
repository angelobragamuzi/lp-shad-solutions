import Image from "next/image";
import projects from "./portfolioData";

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="portfolio-list portfolio-list-clean">
                    {projects.map((project) => (
                        <article className="portfolio-card" key={project.name}>
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
                                <a className="btn secondary" href="/#formulario">
                                    Quero um projeto assim
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
