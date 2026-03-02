import { Boxes, Code2, LifeBuoy } from "lucide-react";
import Reveal from "./Reveal";

const services = [
    {
        title: "Desenvolvimento sob medida",
        description:
            "Projetamos e construímos sistemas, aplicativos e landing pages alinhados ao processo real da sua operação.",
        Icon: Code2,
    },
    {
        title: "Implantação de produtos Shad",
        description:
            "Configuramos nossas plataformas para o seu cenário e organizamos a entrada em produção com fluxo claro para a equipe.",
        Icon: Boxes,
    },
    {
        title: "Suporte e evolução contínua",
        description:
            "Mantemos o projeto saudável com ajustes, melhorias e entregas recorrentes para sustentar crescimento sem retrabalho.",
        Icon: LifeBuoy,
    },
];

export default function Services() {
    return (
        <section className="services-highlight-section" id="servicos">
            <div className="landing-shell">
                <Reveal className="services-highlight-head" delay={0.04}>
                    <span className="eyebrow">Serviços</span>
                    <h2>Do planejamento técnico à operação em produção.</h2>
                    <p className="text-lg">
                        A Shad atua na construção, implantação e evolução de soluções digitais
                        para empresas e operações públicas que precisam de estrutura confiável
                        para crescer.
                    </p>
                </Reveal>

                <div className="services-highlight-grid">
                    {services.map((service, index) => (
                        <Reveal
                            as="article"
                            className="services-highlight-card"
                            delay={0.08 + index * 0.08}
                            key={service.title}
                            direction="up"
                        >
                            <div className="service-icon-orb" aria-hidden="true">
                                <service.Icon size={40} strokeWidth={2.1} />
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
