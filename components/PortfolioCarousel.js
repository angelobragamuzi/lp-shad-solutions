import { useEffect, useState } from "react";
import Image from "next/image";
import projects from "./portfolioData";

export default function PortfolioCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const total = projects.length;

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % total);
        }, 4500);
        return () => clearInterval(timer);
    }, [total]);

    const getPosition = (index) => {
        const offset = (index - activeIndex + total) % total;
        if (offset === 0) return "center";
        if (offset === 1) return "right";
        if (offset === total - 1) return "left";
        return "hidden";
    };

    return (
        <div className="hero-carousel" aria-live="polite">
            <div className="carousel-track">
                {projects.map((project, index) => {
                    const position = getPosition(index);
                    return (
                        <article
                            key={project.name}
                            className={`carousel-card is-${position}`}
                            aria-hidden={position === "hidden"}
                        >
                            <div className="carousel-media">
                                <Image
                                    src={project.image}
                                    alt={`${project.name} - ${project.category}`}
                                    width={1100}
                                    height={720}
                                />
                            </div>
                            <div className="carousel-content">
                                <span className="portfolio-tag">{project.category}</span>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                            </div>
                        </article>
                    );
                })}
            </div>
            <div className="carousel-list" aria-label="Projetos em destaque">
                {projects.map((project) => (
                    <article className="carousel-list-card" key={project.name}>
                        <div className="carousel-list-media">
                            <Image
                                src={project.image}
                                alt={`${project.name} - ${project.category}`}
                                width={1100}
                                height={720}
                            />
                        </div>
                        <div className="carousel-list-content">
                            <span className="portfolio-tag">{project.category}</span>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
