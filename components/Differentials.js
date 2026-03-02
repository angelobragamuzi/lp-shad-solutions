import Reveal from "./Reveal";

const products = [
    {
        name: "ShadManager",
        logo: "/shadmanager-crop.png",
        logoClass: "is-shadmanager",
        logoWidth: 1041,
        logoHeight: 324,
        category: "Gestão de recorrência e cobrança",
        summary:
            "Sistema para controlar mensalidades, vencimentos e inadimplência com uma operação financeira clara e centralizada.",
        audience:
            "Ideal para negócios com cobrança recorrente que precisam de mais previsibilidade de receita.",
        highlights: [
            "Controle completo de mensalidades e vencimentos",
            "Régua de cobrança automatizada por etapa",
            "Painel operacional com visão de inadimplência em tempo real",
        ],
        modules: [
            "Gestão de mensalidades",
            "Fluxo de cobrança",
            "Indicadores financeiros",
        ],
    },
    {
        name: "ShadBoard",
        logo: "/shadboard.svg",
        logoClass: "is-shadboard",
        logoWidth: 653,
        logoHeight: 130,
        category: "Gestão urbana e operação pública",
        summary:
            "Plataforma para prefeituras acompanharem indicadores, ocorrências e resposta territorial em tempo real.",
        audience:
            "Ideal para secretarias e equipes de campo que precisam alinhar visão executiva com execução operacional.",
        highlights: [
            "Painel executivo com SLA, criticidade e histórico por protocolo",
            "Mapa territorial para priorizar equipes por bairro e ocorrência",
            "Fluxo completo do registro à resolução com rastreabilidade",
        ],
        modules: [
            "Painel executivo",
            "Gestão de ocorrências",
            "Monitoramento territorial",
        ],
    },
    {
        name: "Shad Educa",
        logo: "/shadeduca.svg",
        logoClass: "is-shadeduca",
        logoWidth: 623,
        logoHeight: 136,
        category: "Educação digital e venda de cursos",
        summary:
            "Plataforma de ensino online para vender cursos, publicar conteúdo e expandir o catálogo com estrutura escalável.",
        audience:
            "Pensado para especialistas, escolas e empresas que desejam monetizar conhecimento com autonomia.",
        highlights: [
            "Vitrine de cursos com jornada de compra objetiva",
            "Publicação e organização simples de conteúdos",
            "Base pronta para escalar alunos e novos programas",
        ],
        modules: [
            "Catálogo de cursos",
            "Publicação de conteúdo",
            "Ambiente de aprendizado",
        ],
    },
];

export default function Differentials() {
    return (
        <section className="proof-section products-section" id="produtos">
            <div className="landing-shell products-layout">
                <Reveal className="products-copy" delay={0.04}>
                    <span className="eyebrow">Produtos</span>
                    <h2>Tecnologia aplicada para organizar operação e acelerar resultados.</h2>
                    <p className="text-lg">
                        Nossas soluções focam em eficiência operacional, previsibilidade de receita
                        e melhor experiência digital, com estrutura pronta para evoluir junto com
                        o seu negócio.
                    </p>
                </Reveal>

                <Reveal className="products-overview" delay={0.08}>
                    <article className="products-overview-card">
                        <p className="products-overview-label">Portfólio de soluções</p>
                        <p className="products-overview-value">Plataformas proprietárias para operações críticas</p>
                    </article>
                    <article className="products-overview-card">
                        <p className="products-overview-label">Foco de negócio</p>
                        <p className="products-overview-value">Recorrência, educação digital e gestão pública</p>
                    </article>
                    <article className="products-overview-card">
                        <p className="products-overview-label">Modelo de entrega</p>
                        <p className="products-overview-value">Implantação rápida com evolução contínua</p>
                    </article>
                </Reveal>

                <div className="products-grid">
                    {products.map((product, index) => (
                        <Reveal
                            as="article"
                            className="home-product-card"
                            delay={0.08 + index * 0.08}
                            key={product.name}
                        >
                            <div className="home-product-head">
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
                                <p className="home-product-category">{product.category}</p>
                            </div>

                            <p className="home-product-summary">{product.summary}</p>
                            <p className="home-product-audience">{product.audience}</p>

                            <ul className="home-product-highlights">
                                {product.highlights.map((highlight) => (
                                    <li key={highlight}>{highlight}</li>
                                ))}
                            </ul>

                            <div className="home-product-modules">
                                {product.modules.map((module) => (
                                    <span className="home-product-module" key={module}>
                                        {module}
                                    </span>
                                ))}
                            </div>

                            <a className="btn secondary" href="/#formulario">
                                Solicitar apresentação
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
