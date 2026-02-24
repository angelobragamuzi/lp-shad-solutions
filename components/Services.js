import Reveal from "./Reveal";

const benefits = [
    {
        title: "Escalabilidade nativa",
        text: "Arquitetura pronta para crescer sem gargalos quando o volume subir.",
    },
    {
        title: "Performance first",
        text: "Experiências rápidas e leves para elevar conversão e retenção.",
    },
    {
        title: "Automação inteligente",
        text: "Fluxos conectados que reduzem operação manual e aceleram decisões.",
    },
    {
        title: "Evolução contínua",
        text: "Base modular para lançar, iterar e expandir sem retrabalho.",
    },
];

export default function Services() {
    return (
        <section className="benefits-section" id="beneficios">
            <div className="landing-shell">
                <Reveal className="section-head section-head-left">
                    <span className="eyebrow">Benefícios</span>
                    <h2>Estrutura digital para operar sem limites.</h2>
                    <p className="text-lg">
                        Menos ruído, mais velocidade e uma base preparada para
                        crescimento real.
                    </p>
                </Reveal>

                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <Reveal
                            as="article"
                            key={benefit.title}
                            className="benefit-card"
                            delay={index * 0.08}
                        >
                            <span className="benefit-index">0{index + 1}</span>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.text}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
