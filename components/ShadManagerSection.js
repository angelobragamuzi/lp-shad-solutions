import Image from "next/image";
import Reveal from "./Reveal";

const galleryItems = [
    {
        src: "/manager1.png",
        title: "Visão geral das mensalidades",
        text: "Tenha clareza do que entra, do que vence e do que precisa de ação imediata.",
    },
    {
        src: "/manager2.png",
        title: "Dashboard intuitivo",
        text: "Indicadores simples para empresas e autônomos acompanharem a operação em segundos.",
    },
    {
        src: "/manager3.png",
        title: "Controle de inadimplentes",
        text: "Identifique clientes em atraso e priorize cobranças com foco no fluxo de caixa.",
    },
    {
        src: "/manager4.png",
        title: "Cobrança direta",
        text: "Dispare lembretes e cobranças rapidamente para quem está inadimplente.",
    },
];

export default function ShadManagerSection() {
    return (
        <section className="product-showcase" id="shadmanager">
            <div className="container">
                <Reveal className="section-head">
                    <span className="eyebrow">Produto</span>
                    <h2>ShadManager: controle total das suas mensalidades.</h2>
                    <p className="text-lg">
                        Um software para empresas e autônomos gerenciarem pagamentos recorrentes,
                        visualizar indicadores e atuar na inadimplência com rapidez.
                    </p>
                </Reveal>

                <div className="product-layout">
                    <Reveal className="product-intro">
                        <div className="product-badge">
                            <Image
                                src="/managerlogo.svg"
                                alt="Logo do ShadManager"
                                width={156}
                                height={44}
                            />
                            <span className="product-tag">Gestão inteligente</span>
                        </div>
                        <h3>Mais previsibilidade de receita e menos trabalho manual.</h3>
                        <p>
                            Centralize mensalidades, acompanhe pagamentos e resolva atrasos com
                            um fluxo simples de operar. Tudo pensado para a rotina de negócios
                            que precisam de agilidade.
                        </p>
                        <ul className="product-points">
                            <li>Cadastro rápido de clientes e mensalidades.</li>
                            <li>Painel com indicadores claros e atualizados.</li>
                            <li>Lista automática de inadimplentes.</li>
                            <li>Opção de cobrar diretamente a pessoa inadimplente.</li>
                        </ul>
                        <div className="product-actions">
                            <a className="btn primary" href="/planos#formulario">
                                Quero uma demonstração
                            </a>
                            <a className="btn secondary" href="/#contato">
                                Falar com especialista
                            </a>
                        </div>
                    </Reveal>

                    <div className="product-gallery" aria-label="Telas do ShadManager">
                        {galleryItems.map((item, index) => (
                            <Reveal
                                as="article"
                                className="product-card"
                                delay={index * 0.08}
                                key={item.title}
                            >
                                <div className="product-media">
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        width={900}
                                        height={560}
                                    />
                                </div>
                                <div className="product-card-content">
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
