import { useRef, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import Reveal from "./Reveal";

const plans = [
    {
        name: "Plano Essencial",
        summary: "Presença digital inicial para vender com mais organização.",
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
            "Layout personalizado da marca",
            "Suporte contínuo para ajustes simples",
        ],
    },
    {
        name: "Plano Completo",
        summary: "Autonomia total para gerenciar produtos com agilidade.",
        price: "R$ 389,00",
        features: [
            "Tudo do Plano Profissional",
            "Vitrine de produtos dinâmica",
            "Painel para adicionar produtos",
            "Painel para editar produtos",
            "Painel para remover produtos",
            "Redirecionamento automático para WhatsApp por produto",
            "Suporte contínuo",
        ],
    },
    {
        name: "Plano Pagamento Online",
        summary: "Para empresas que querem vender direto no site.",
        price: "R$ 489,00",
        featured: true,
        badge: "Mais completo",
        features: [
            "Landing page completa (1 página)",
            "Vitrine de produtos dinâmica",
            "Painel para adicionar, editar e remover produtos",
            "Integração com gateway de pagamento",
            "Pix e cartão de crédito",
            "Checkout externo ou integrado (conforme gateway)",
            "Redirecionamento para WhatsApp como apoio",
            "Domínio personalizado",
            "Hospedagem inclusa",
            "Layout totalmente personalizado",
            "Suporte contínuo",
        ],
    },
];

const serviceOptions = ["Landing page", "Software", "Aplicativo", "E-commerce", "Outro"];

const INITIAL_FORM = {
    name: "",
    email: "",
    company: "",
    phone: "",
    serviceType: plans[0].name,
    description: "",
};

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

export default function HomePlansSection() {
    const formRef = useRef(null);
    const [formData, setFormData] = useState(INITIAL_FORM);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handlePlanSelect = (planName) => {
        setFormData((prev) => ({ ...prev, serviceType: planName }));
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const resetForm = () => {
        setFormData(INITIAL_FORM);
        setLoading(false);
        setSuccess(false);
        setError("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formElement = event.currentTarget;
        if (!formElement.checkValidity()) {
            formElement.reportValidity();
            return;
        }

        setLoading(true);
        setError("");

        try {
            const response = await fetch("/api/request-demo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    contactType: formData.serviceType,
                    company: formData.company,
                    description: formData.description,
                }),
            });

            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                throw new Error(data.error || "Não foi possível enviar sua solicitação.");
            }

            setSuccess(true);
        } catch (submitError) {
            setError(submitError.message || "Falha ao enviar o formulário.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section className="plans-section" id="planos">
                <div className="landing-shell">
                    <Reveal className="section-head section-head-left" delay={0.04}>
                        <span className="eyebrow">Planos comerciais</span>
                        <h2>Escolha o pacote ideal para o seu momento.</h2>
                        <p className="text-lg">
                            Opções estruturadas para fortalecer presença digital, melhorar
                            conversão e manter suporte contínuo.
                        </p>
                    </Reveal>

                    <div className="plans-grid">
                        {plans.map((plan, index) => (
                            <Reveal
                                as="article"
                                key={plan.name}
                                className={`plan-card${plan.featured ? " featured" : ""}`}
                                delay={0.08 + index * 0.06}
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
                                        className={`btn ${plan.featured ? "primary" : "secondary"} plan-cta`}
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
                        Funcionalidades extras podem ser orçadas separadamente.
                    </p>
                </div>
            </section>

            <section className="plans-form" id="formulario">
                <div className="landing-shell">
                    <Reveal className="section-head section-head-left" delay={0.04}>
                        <span className="eyebrow">Contato</span>
                        <h2>Solicite seu orçamento</h2>
                        <p className="text-lg">
                            Envie seu objetivo e retornaremos com uma proposta objetiva para o
                            seu cenário.
                        </p>
                    </Reveal>

                    <Reveal as="div" className="form-card" delay={0.08}>
                        {loading ? (
                            <div className="contact-modal-status" role="status" aria-live="polite">
                                <Loader2
                                    className="contact-modal-status-icon spinning"
                                    aria-hidden="true"
                                />
                                <h3>Enviando solicitação</h3>
                                <p>Estamos validando seus dados para direcionar o atendimento.</p>
                            </div>
                        ) : success ? (
                            <div className="contact-modal-status" role="status" aria-live="polite">
                                <CheckCircle2
                                    className="contact-modal-status-icon success"
                                    aria-hidden="true"
                                />
                                <h3>Solicitação enviada com sucesso</h3>
                                <p>Retornaremos em breve com os próximos passos do seu projeto.</p>
                                <div className="contact-modal-status-actions">
                                    <button type="button" className="btn primary" onClick={resetForm}>
                                        Enviar nova solicitação
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit}>
                                {error && (
                                    <p className="contact-modal-error" role="alert">
                                        {error}
                                    </p>
                                )}

                                <div className="form-grid">
                                    <div className="form-field">
                                        <label htmlFor="form-name">Nome</label>
                                        <input
                                            id="form-name"
                                            name="name"
                                            type="text"
                                            placeholder="Seu nome"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-field">
                                        <label htmlFor="form-email">E-mail</label>
                                        <input
                                            id="form-email"
                                            name="email"
                                            type="email"
                                            placeholder="voce@empresa.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-field">
                                        <label htmlFor="form-company">Nome da empresa</label>
                                        <input
                                            id="form-company"
                                            name="company"
                                            type="text"
                                            placeholder="Nome da empresa"
                                            value={formData.company}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-field">
                                        <label htmlFor="form-phone">Telefone</label>
                                        <input
                                            id="form-phone"
                                            name="phone"
                                            type="tel"
                                            inputMode="numeric"
                                            placeholder="(00) 00000-0000"
                                            value={formData.phone}
                                            onChange={(event) =>
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    phone: formatPhone(event.target.value),
                                                }))
                                            }
                                            required
                                        />
                                    </div>

                                    <div className="form-field full">
                                        <label htmlFor="form-service">Tipo de serviço desejado</label>
                                        <select
                                            id="form-service"
                                            name="serviceType"
                                            value={formData.serviceType}
                                            onChange={handleChange}
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
                                        <label htmlFor="form-description">Descrição da necessidade</label>
                                        <textarea
                                            id="form-description"
                                            name="description"
                                            rows="4"
                                            placeholder="Descreva objetivos, prazos e contexto do projeto."
                                            value={formData.description}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="contact-modal-actions home-form-actions">
                                    <button type="submit" className="btn primary form-submit">
                                        Solicitar orçamento
                                    </button>
                                </div>
                            </form>
                        )}
                    </Reveal>
                </div>
            </section>
        </>
    );
}
