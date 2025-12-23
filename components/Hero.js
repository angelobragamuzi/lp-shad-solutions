export default function Hero({ onRequestDemo }) {
    return (
        <section className="hero">
            <div className="container hero-grid">
                <div>
                    <h1>Sistema de Gestão<br />Financeira Pessoal</h1>
                    <p>
                        ShadFinancy é um aplicativo de gestão financeira focado
                        em controle, visualização e planejamento com base em dados reais.
                    </p>

                    <div className="hero-actions">
                        <button
                            type="button"
                            className="btn primary"
                            onClick={onRequestDemo}
                        >
                            Solicitar demonstração
                        </button>

                        <a href="#inteligencia" className="btn secondary">
                            Inteligência
                        </a>
                    </div>
                </div>

                <div className="manifest">
                    Controle financeiro com análise,
                    previsibilidade e inteligência integrada.
                </div>
            </div>
        </section>
    )
}
