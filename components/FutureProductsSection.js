import Reveal from "./Reveal";

const phases = [
    {
        code: "01",
        title: "Estrutura do processo",
        description: "Base do fluxo de vagas, inscrições e perfis operacionais.",
        status: "Concluída",
        state: "done",
    },
    {
        code: "02",
        title: "Portal de candidaturas",
        description: "Publicação de vagas e inscrição com critérios claros.",
        status: "Concluída",
        state: "done",
    },
    {
        code: "03",
        title: "Triagem e shortlist",
        description: "Leitura rápida por filtro, prioridade e aderência da vaga.",
        status: "Em produção",
        state: "live",
    },
    {
        code: "04",
        title: "Comunicação de etapas",
        description: "Retornos por status para manter o candidato informado.",
        status: "Próxima etapa",
        state: "next",
    },
    {
        code: "05",
        title: "Painel de indicadores",
        description: "SLA, tempo de fechamento e conversão por ciclo.",
        status: "Roteiro 2026",
        state: "next",
    },
];

const activePhaseCount = 3;
const progressPercent =
    phases.length > 1
        ? ((activePhaseCount - 1) / (phases.length - 1)) * 100
        : 100;
const totalSegments = Math.max(phases.length - 1, 1);
const progressRatio = Math.max(progressPercent / 100, 0.01);

export default function FutureProductsSection() {
    return (
        <section className="future-lab-section shadestagios-section" id="proximos-produtos">
            <div className="landing-shell shadestagios-shell">
                <Reveal className="shadestagios-head" delay={0.04}>
                    <span className="eyebrow">Em desenvolvimento</span>
                    <h2>ShadEstágios</h2>
                    <p className="text-lg">
                        Plataforma para organizar candidaturas de estágio com leitura rápida,
                        decisão clara e controle do ciclo completo.
                    </p>
                </Reveal>

                <Reveal
                    as="div"
                    className="shadestagios-roadmap"
                    delay={0.08}
                    style={{
                        "--shadestagios-progress": `${progressPercent}%`,
                        "--shadestagios-progress-mobile": `${progressPercent}%`,
                        "--shadestagios-stop-ratio": progressRatio,
                        "--shadestagios-total-segments": totalSegments,
                    }}
                >
                    <div className="shadestagios-track" aria-hidden="true">
                        <span className="shadestagios-track-base" />
                        <span className="shadestagios-track-fill" />
                        <ol className="shadestagios-milestones">
                            {phases.map((phase, index) => (
                                <li
                                    className={`shadestagios-milestone ${index < activePhaseCount ? "is-active" : ""}`}
                                    key={phase.code}
                                    style={{ "--milestone-index": index }}
                                >
                                    <span className="shadestagios-dot">
                                        <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
                                            <path
                                                d="M3.2 8.5l2.5 2.5L12.8 4.9"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    <span className="shadestagios-step">Fase {phase.code}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="shadestagios-cards" aria-label="Fases do ShadEstágios">
                        {phases.map((phase) => (
                            <article className={`shadestagios-card ${phase.state}`} key={phase.code}>
                                <p className="shadestagios-card-code">Fase {phase.code}</p>
                                <h3>{phase.title}</h3>
                                <p>{phase.description}</p>
                                <span className={`shadestagios-status ${phase.state}`}>
                                    {phase.status}
                                </span>
                            </article>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
