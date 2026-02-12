import Reveal from "./Reveal";

export default function ContactSection() {
    return (
        <section id="contato" className="final-cta">
            <div className="container">
                <Reveal className="cta-panel">
                    <div className="cta-copy">
                        <span className="eyebrow">Pronto para evoluir</span>
                        <h2>Vamos desenhar a solução digital certa para a sua empresa.</h2>
                        <p className="text-lg">
                            Fale com a Shad Solutions e receba um plano objetivo para tirar o
                            projeto do papel com velocidade e qualidade.
                        </p>
                    </div>

                    <div className="cta-actions">
                        <a
                            className="btn primary"
                            href="/planos#formulario"
                        >
                            Solicitar orçamento
                        </a>
                        <a className="btn secondary" href="#portfolio">
                            Ver cases
                        </a>
                        <span className="cta-note">
                            shadsolutionsinteligence@gmail.com
                        </span>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
