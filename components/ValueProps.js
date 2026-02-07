const values = [
    {
        title: "Performance",
        text: "Sites leves e rápidos, prontos para escalar sem fricção.",
    },
    {
        title: "Conversão",
        text: "Fluxos claros e copy direta para transformar visitas em ação.",
    },
    {
        title: "Design estratégico",
        text: "Interface premium que reforça marca e confiança.",
    },
    {
        title: "SEO e automação",
        text: "Estrutura técnica e integrações prontas para captar leads.",
    },
];

export default function ValueProps() {
    return (
        <section className="value" id="valor">
            <div className="container">
                <div className="section-head" data-reveal>
                    <span className="eyebrow">Prova de valor</span>
                    <h2>Decisões orientadas a resultado</h2>
                    <p className="text-lg">
                        Cada bloco da experiência é pensado para performance,
                        confiança e conversão.
                    </p>
                </div>

                <div className="value-grid">
                    {values.map((item, index) => (
                        <div
                            className="value-card"
                            key={item.title}
                            data-reveal
                            style={{ "--delay": `${index * 0.05}s` }}
                        >
                            <div className="value-icon" aria-hidden="true" />
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
