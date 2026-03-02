import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import Reveal from "./Reveal";

const productOptions = ["ShadManager", "ShadBoard", "Shad Educa"];

const serviceOptions = [
    "Software sob medida",
    "Aplicativo",
    "Landing page",
    "E-commerce",
    "Automação e integrações",
    "Outro",
];

const INITIAL_FORM = {
    name: "",
    email: "",
    company: "",
    phone: "",
    serviceType: serviceOptions[0],
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
    const [formData, setFormData] = useState(INITIAL_FORM);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

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
        <section className="plans-form home-contact-section" id="formulario">
            <div className="landing-shell">
                <Reveal className="section-head section-head-left" delay={0.04}>
                    <span className="eyebrow">Orçamento</span>
                    <h2>Converse com um especialista e receba um plano de execução.</h2>
                    <p className="text-lg">
                        Compartilhe seu contexto e retornaremos com escopo, prazo e
                        recomendações claras para o seu projeto.
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
                            <p>Estamos validando os dados para direcionar o atendimento.</p>
                        </div>
                    ) : success ? (
                        <div className="contact-modal-status" role="status" aria-live="polite">
                            <CheckCircle2
                                className="contact-modal-status-icon success"
                                aria-hidden="true"
                            />
                            <h3>Solicitação enviada com sucesso</h3>
                            <p>Retornaremos em breve com os próximos passos do projeto.</p>
                            <div className="contact-modal-status-actions">
                                <button type="button" className="btn primary" onClick={resetForm}>
                                    Enviar nova solicitação
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
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
                                        <optgroup label="Interesse em produtos">
                                            {productOptions.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </optgroup>
                                        <optgroup label="Projeto sob medida">
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
    );
}
