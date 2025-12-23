import { Receipt, LayoutDashboard, BarChart3, Layers } from 'lucide-react'

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

export default function SystemsGrid() {
    return (
        <section id="produto">
            <div className="container split">
                <div>
                    <h2>O Sistema</h2>
                    <p className="text-lg">
                        Plataforma criada para organizar, interpretar e transformar
                        dados financeiros em decisões claras.
                    </p>
                </div>

                <div className="system-grid">
                    <System Icon={Receipt} title="Registro Financeiro">Entradas e saídas com histórico persistente e categorização inteligente.</System>
                    <System Icon={LayoutDashboard} title="Dashboard">Resumo da saúde financeira com indicadores claros e dados consolidados.</System>
                    <System Icon={BarChart3} title="Visualização de Dados">Dados objetivos para acompanhamento e análise financeira contínua.</System>
                    <System Icon={Layers} title="Design">Interface brutalista refinada, focada em clareza e performance.</System>
                </div>
            </div>
        </section>
    )
}
