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
                            href="https://wa.me/553398251124?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."
                            target="_blank"
                            rel="noopener noreferrer"
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
