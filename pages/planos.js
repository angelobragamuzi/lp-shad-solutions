import { useRef, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const plans = [
    {
        name: "Plano Essencial",
        summary: "Presença online básica para a loja.",
        price: "R$ 249,00",
        features: [
            "Landing page simples (1 página)",
            "Vitrine de produtos estática",
            "Redirecionamento para WhatsApp por produto",
            "Layout responsivo (celular e computador)",
            "Hospedagem gratuita",
            "Sem domínio próprio",
            "Suporte por 12 meses (ajustes simples)",
        ],
    },
    {
        name: "Plano Profissional",
        summary: "Mais credibilidade e identidade para o negócio.",
        price: "R$ 319,00",
        features: [
            "Landing page simples (1 página)",
            "Vitrine de produtos estática",
            "Redirecionamento para WhatsApp",
            "Domínio personalizado",
            "Hospedagem inclusa",
            "Layout personalizado conforme a identidade da loja",
            "Suporte contínuo para ajustes simples",
        ],
    },
    {
        name: "Plano Completo",
        summary: "Autonomia total para gerenciar produtos.",
        price: "R$ 389,00",
        features: [
            "Tudo do Plano Profissional",
            "Vitrine de produtos dinâmica",
            "Painel administrativo para adicionar produtos",
            "Painel administrativo para editar produtos",
            "Painel administrativo para remover produtos",
            "Redirecionamento automático para WhatsApp por produto",
            "Suporte contínuo",
        ],
    },
    {
        name: "Plano Pagamento Online",
        summary: "Ideal para negócios que desejam vender direto pelo site.",
        price: "R$ 489,00",
        featured: true,
        badge: "Mais completo",
        features: [
            "Landing page completa (1 página)",
            "Vitrine de produtos dinâmica",
            "Painel administrativo para adicionar produtos",
            "Painel administrativo para editar produtos",
            "Painel administrativo para remover produtos",
            "Integração exclusiva com gateway de pagamento",
            "Pix",
            "Cartão de crédito",
            "Checkout externo ou integrado (conforme gateway escolhido)",
            "Redirecionamento para WhatsApp como apoio à venda",
            "Domínio personalizado",
            "Hospedagem inclusa",
            "Layout totalmente personalizado",
            "Suporte contínuo",
        ],
    },
];

const serviceOptions = [
    "Landing Page",
    "Software",
    "Aplicativo",
    "E-commerce",
    "Outro",
];

const whatsappNumber = "553398251124";

const formatPhone = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 10) {
        const part1 = digits.slice(0, 2);
        const part2 = digits.slice(2, 6);
        const part3 = digits.slice(6, 10);
        if (!digits.length) return "";
        if (digits.length < 3) return `(${part1}`;
        if (digits.length < 7) return `(${part1}) ${part2}`;
        return `(${part1}) ${part2}-${part3}`;
    }
    const part1 = digits.slice(0, 2);
    const part2 = digits.slice(2, 7);
    const part3 = digits.slice(7, 11);
    return `(${part1}) ${part2}-${part3}`;
};

export default function Planos() {
    const formRef = useRef(null);
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [serviceType, setServiceType] = useState(serviceOptions[0]);
    const [description, setDescription] = useState("");

    const handlePlanSelect = (planName) => {
        setServiceType(planName);
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = formRef.current;
        if (form && !form.checkValidity()) {
            form.reportValidity();
            return;
        }
        const message = [
            "Olá! Gostaria de solicitar um orçamento.",
            "",
            `Nome: ${name}`,
            `Empresa: ${company}`,
            `Telefone: ${phone}`,
            `Tipo de serviço: ${serviceType}`,
            `Necessidade: ${description}`,
        ].join("\n");
        const encoded = encodeURIComponent(message);
        window.location.href = `https://wa.me/${whatsappNumber}?text=${encoded}`;
    };

    return (
        <>
            <Head>
                <title>Planos | Shad Solutions</title>
                <meta
                    name="description"
                    content="Conheça os planos de desenvolvimento da Shad Solutions e escolha a solução ideal para o seu negócio."
                />
            </Head>

            <Header />
            <main>
                <section className="plans-hero" id="topo">
                    <div className="container">
                        <Reveal className="plans-hero-inner">
                            <span className="eyebrow">Planos</span>
                            <h1>Nossos Planos de Desenvolvimento</h1>
                            <p className="text-lg">
                                Soluções sob medida para impulsionar seu negócio digital.
                            </p>
                            <p className="plans-hero-note">
                                Estrutura comercial sólida, entrega rápida e suporte
                                contínuo para você vender mais com tecnologia confiável.
                            </p>
                            <div className="hero-cta">
                                <a className="btn primary" href="#planos">
                                    Ver planos
                                </a>
                                <a className="btn secondary" href="#formulario">
                                    Solicitar orçamento
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="plans-section" id="planos">
                    <div className="container">
                        <Reveal className="section-head">
                            <span className="eyebrow">Planos comerciais</span>
                            <h2>Escolha o pacote ideal para o seu momento.</h2>
                            <p className="text-lg">
                                Planos estruturados com foco em conversão, presença
                                profissional e suporte contínuo.
                            </p>
                        </Reveal>

                        <div className="plans-grid">
                            {plans.map((plan, index) => (
                                <Reveal
                                    as="article"
                                    key={plan.name}
                                    className={`plan-card${plan.featured ? " featured" : ""}`}
                                    delay={index * 0.08}
                                >
                                    <div className="plan-header">
                                        {plan.featured && (
                                            <span className="plan-badge">{plan.badge}</span>
                                        )}
                                        <h3>{plan.name}</h3>
                                        <p>{plan.summary}</p>
                                    </div>
                                    <ul className="plan-features">
                                        {plan.features.map((feature) => (
                                            <li key={feature}>{feature}</li>
                                        ))}
                                    </ul>
                                    <div className="plan-footer">
                                        <p className="plan-price">{plan.price}</p>
                                        <button
                                            type="button"
                                            className={`btn ${
                                                plan.featured ? "primary" : "secondary"
                                            } plan-cta`}
                                            onClick={() => handlePlanSelect(plan.name)}
                                        >
                                            Solicitar este plano
                                        </button>
                                    </div>
                                </Reveal>
                            ))}
                        </div>

                        <p className="plans-disclaimer">
                            Os valores incluem desenvolvimento e configuração inicial.
                            Alterações estruturais ou novas funcionalidades podem ser
                            orçadas à parte.
                        </p>
                    </div>
                </section>

                <section className="plans-form" id="formulario">
                    <div className="container">
                        <Reveal className="section-head">
                            <span className="eyebrow">Contato</span>
                            <h2>Solicite seu orçamento</h2>
                            <p className="text-lg">
                                Conte rapidamente o que você precisa e retornaremos com
                                uma proposta objetiva.
                            </p>
                        </Reveal>

                        <Reveal as="form" className="form-card" ref={formRef} onSubmit={handleSubmit}>
                            <div className="form-grid">
                                <div className="form-field">
                                    <label htmlFor="nome">Nome</label>
                                    <input
                                        id="nome"
                                        name="nome"
                                        type="text"
                                        placeholder="Seu nome"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="empresa">Nome da empresa</label>
                                    <input
                                        id="empresa"
                                        name="empresa"
                                        type="text"
                                        placeholder="Nome da empresa"
                                        value={company}
                                        onChange={(event) => setCompany(event.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="telefone">Telefone</label>
                                    <input
                                        id="telefone"
                                        name="telefone"
                                        type="tel"
                                        inputMode="numeric"
                                        placeholder="(00) 00000-0000"
                                        value={phone}
                                        onChange={(event) =>
                                            setPhone(formatPhone(event.target.value))
                                        }
                                        required
                                    />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="servico">Tipo de serviço desejado</label>
                                    <select
                                        id="servico"
                                        name="servico"
                                        value={serviceType}
                                        onChange={(event) => setServiceType(event.target.value)}
                                        required
                                    >
                                        <optgroup label="Planos de desenvolvimento">
                                            {plans.map((plan) => (
                                                <option key={plan.name} value={plan.name}>
                                                    {plan.name}
                                                </option>
                                            ))}
                                        </optgroup>
                                        <optgroup label="Serviços sob medida">
                                            {serviceOptions.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </optgroup>
                                    </select>
                                </div>
                                <div className="form-field full">
                                    <label htmlFor="descricao">
                                        Descrição da necessidade
                                    </label>
                                    <textarea
                                        id="descricao"
                                        name="descricao"
                                        rows="4"
                                        placeholder="Descreva o que você precisa, objetivos e prazos."
                                        value={description}
                                        onChange={(event) =>
                                            setDescription(event.target.value)
                                        }
                                        required
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn primary form-submit">
                                Solicitar orçamento
                            </button>
                        </Reveal>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
