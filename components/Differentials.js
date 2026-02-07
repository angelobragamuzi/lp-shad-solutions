import Reveal from "./Reveal";

const differentials = [
    {
        title: "Direção Estratégica",
        text: "Cada entrega começa com entendimento real do negócio e metas objetivas.",
    },
    {
        title: "Execução de Alto Nível",
        text: "Design e desenvolvimento trabalhando juntos para consistência visual e técnica.",
    },
    {
        title: "Comunicação Direta",
        text: "Processo claro, alinhamento contínuo e decisões transparentes durante o projeto.",
    },
    {
        title: "Escalabilidade",
        text: "Arquitetura preparada para evoluções futuras sem retrabalho desnecessário.",
    },
];

export default function Differentials() {
    return (
        <section className="differentials" id="diferenciais">
            <div className="container">
                <Reveal className="section-head">
                    <span className="eyebrow">Diferenciais</span>
                    <h2>Qualidade de software com visão de produto.</h2>
                    <p className="text-lg">
                        Não entregamos apenas telas bonitas. Entregamos estrutura, fluxo e
                        performance para o seu negócio operar melhor.
                    </p>
                </Reveal>

                <div className="differentials-grid">
                    {differentials.map((item, index) => (
                        <Reveal
                            as="article"
                            className="differential-card"
                            delay={index * 0.08}
                            key={item.title}
                        >
                            <span className="differential-index">0{index + 1}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
