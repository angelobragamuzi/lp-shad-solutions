import Reveal from "./Reveal";

export default function ContactSection({ onOpenContact }) {
    return (
        <section id="contato" className="cta-final-section">
            <div className="landing-shell">
                <Reveal className="cta-panel cta-panel-minimal">
                    <div className="cta-copy">
                        <span className="eyebrow">Próximo passo</span>
                        <h2>Vamos transformar sua ideia em um sistema de verdade?</h2>
                        <p className="text-lg">
                            Converse com a Shad Solutions e receba uma proposta clara,
                            objetiva e alinhada ao momento do seu negócio.
                        </p>
                    </div>

                    <div className="cta-actions cta-actions-inline">
                        <a
                            className="btn primary"
                            href="/planos#formulario"
                            onClick={(event) => {
                                if (typeof onOpenContact === "function") {
                                    event.preventDefault();
                                    onOpenContact();
                                }
                            }}
                        >
                            Solicitar proposta
                        </a>
                        <a className="btn secondary" href="/planos">
                            Conhecer planos
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
