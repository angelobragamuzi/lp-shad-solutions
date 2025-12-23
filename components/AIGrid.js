import { Target, FileText, MessagesSquare, Database } from 'lucide-react'

function System({ Icon, title, children }) {
    return (
        <div className="system">
            <div className="system-head">
                <Icon />
                <h3>{title}</h3>
            </div>
            <p>{children}</p>
        </div>
    )
}

export default function AIGrid() {
    return (
        <section id="inteligencia">
            <div className="container split">
                <div>
                    <h2>Inteligência Artificial</h2>
                    <p className="text-lg">
                        Análise avançada dos dados financeiros para decisões
                        estratégicas e planejamento personalizado.
                    </p>
                </div>

                <div className="system-grid">
                    <System Icon={Target} title="Simulador de Metas">Criação de planos financeiros baseados em objetivos definidos.</System>
                    <System Icon={FileText} title="Planos Financeiros">Planos estruturados com exportação em PDF.</System>
                    <System Icon={MessagesSquare} title="Chat com IA">Consultas financeiras inteligentes e resumos periódicos.</System>
                    <System Icon={Database} title="Base de Dados">Respostas baseadas exclusivamente nos dados do usuário.</System>
                </div>
            </div>
        </section>
    )
}
