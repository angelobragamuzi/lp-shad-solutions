const steps = [
    {
        number: "01",
        title: "Estratégia",
        text: "Imersão no negócio, metas claras e definição do diferencial competitivo.",
    },
    {
        number: "02",
        title: "Design",
        text: "Wireframes, UI premium e protótipos focados em conversão.",
    },
    {
        number: "03",
        title: "Desenvolvimento",
        text: "Código limpo, performance alta e integrações inteligentes.",
    },
    {
        number: "04",
        title: "Entrega",
        text: "Lançamento com foco em performance, métricas e otimização contínua.",
    },
];

export default function Process() {
    return (
        <section className="process" id="processo">
            <div className="container">
                <div className="section-head" data-reveal>
                    <span className="eyebrow">Processo</span>
                    <h2>Um fluxo claro para acelerar resultados</h2>
                    <p className="text-lg">
                        Do planejamento ao lançamento com previsibilidade e foco em conversão.
                    </p>
                </div>

                <div className="process-grid">
                    {steps.map((step, index) => (
                        <div
                            className="process-card"
                            key={step.title}
                            data-reveal
                            style={{ "--delay": `${index * 0.05}s` }}
                        >
                            <span className="process-number">{step.number}</span>
                            <h3>{step.title}</h3>
                            <p>{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
