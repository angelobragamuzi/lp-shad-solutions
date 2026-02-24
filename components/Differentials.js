import Reveal from "./Reveal";

const products = [
    {
        name: "ShadManager",
        logo: "/shadmanager-crop.png",
        logoClass: "is-shadmanager",
        logoWidth: 1041,
        logoHeight: 324,
        summary:
            "Sistema de gest\u00e3o de mensalidades, pagamentos e inadimpl\u00eancia com cobran\u00e7as automatizadas e controle do neg\u00f3cio.",
        points: [
            "Controle de mensalidades e vencimentos",
            "Cobran\u00e7as automatizadas para reduzir inadimpl\u00eancia",
            "Vis\u00e3o clara da opera\u00e7\u00e3o em um painel objetivo",
        ],
    },
    {
        name: "Shad Educa",
        logo: "/shadeduca.svg",
        logoClass: "is-shadeduca",
        logoWidth: 623,
        logoHeight: 136,
        summary:
            "Plataforma estilo AVA que permite ao usu\u00e1rio comprar cursos e tamb\u00e9m subir conte\u00fados para venda.",
        points: [
            "Ambiente completo para compra de cursos",
            "Publica\u00e7\u00e3o de cursos com fluxo simples",
            "Estrutura pronta para escalar cat\u00e1logo e alunos",
        ],
    },
];

export default function Differentials() {
    return (
        <section className="proof-section products-section" id="produtos">
            <div className="landing-shell products-layout">
                <Reveal className="products-copy" delay={0.04}>
                    <span className="eyebrow">Produtos</span>
                    <h2>{"Solu\u00e7\u00f5es pr\u00f3prias para gest\u00e3o e educa\u00e7\u00e3o digital."}</h2>
                    <p className="text-lg">
                        {"Conhe\u00e7a os produtos da Shad Solutions para organizar opera\u00e7\u00e3o, vender cursos e crescer com tecnologia aplicada ao neg\u00f3cio."}
                    </p>
                </Reveal>

                <div className="products-columns">
                    {products.map((product, index) => (
                        <Reveal
                            as="article"
                            className="product-column"
                            delay={0.08 + index * 0.08}
                            key={product.name}
                        >
                            <div className={`product-brand ${product.logoClass}`}>
                                <img
                                    src={product.logo}
                                    alt={`Logo ${product.name}`}
                                    width={product.logoWidth}
                                    height={product.logoHeight}
                                    loading={index === 0 ? "eager" : "lazy"}
                                    decoding="async"
                                />
                            </div>

                            <p className="product-summary">{product.summary}</p>

                            <ul className="product-points">
                                {product.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>

                            <a className="btn secondary" href="/#formulario">
                                Quero saber mais
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
