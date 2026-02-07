import Reveal from "./Reveal";

const points = [
    {
        title: "Sob demanda",
        text: "Escopo definido com base na operação e prioridade do negócio.",
    },
    {
        title: "Atendimento próximo",
        text: "Contato direto e acompanhamento em cada etapa do projeto.",
    },
    {
        title: "Suporte adaptado",
        text: "Ajustes e evolução conforme a empresa cresce.",
    },
];

export default function Positioning() {
    return (
        <section className="positioning" id="posicionamento">
            <div className="container positioning-grid">
                <Reveal className="positioning-copy">
                    <span className="eyebrow">Posicionamento</span>
                    <h2>Prestação de serviços digitais para empresas locais.</h2>
                    <p className="text-lg">
                        Projetos sob medida, sem pacotes engessados, com foco em operação
                        real, clareza de escopo e resultados aplicáveis no dia a dia.
                    </p>
                </Reveal>

                <div className="positioning-list">
                    {points.map((item, index) => (
                        <Reveal
                            className="positioning-item"
                            delay={index * 0.08}
                            key={item.title}
                        >
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}