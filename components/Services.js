import Reveal from "./Reveal";

const services = [
    {
        title: "Landing Pages",
        text: "Páginas de alta conversão com estrutura de oferta, prova e CTA para gerar leads qualificados.",
        points: [
            "Copy orientada a conversão",
            "Estrutura validada para campanhas",
            "Carregamento rápido e SEO técnico",
        ],
    },
    {
        title: "Apps Mobile",
        text: "Aplicativos para operação e relacionamento com clientes, com experiência fluida e escalável.",
        points: [
            "Interface mobile-first",
            "Integrações com APIs e sistemas",
            "Publicação e evolução contínua",
        ],
    },
    {
        title: "Softwares Sob Medida",
        text: "Sistemas personalizados para processos internos, automações e gestão com dados em tempo real.",
        points: [
            "Mapeamento de fluxo real",
            "Painéis e módulos personalizados",
            "Suporte técnico pós-entrega",
        ],
    },
];

export default function Services() {
    return (
        <section className="services" id="servicos">
            <div className="container">
                <Reveal className="section-head">
                    <span className="eyebrow">Serviços</span>
                    <h2>Soluções digitais alinhadas ao seu objetivo de negócio.</h2>
                    <p className="text-lg">
                        Entregamos produtos com design estratégico, engenharia sólida e
                        foco em resultado.
                    </p>
                </Reveal>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <Reveal
                            as="article"
                            key={service.title}
                            className="service-card"
                            delay={index * 0.08}
                        >
                            <span className="service-index">0{index + 1}</span>
                            <h3>{service.title}</h3>
                            <p>{service.text}</p>
                            <ul className="service-points">
                                {service.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
