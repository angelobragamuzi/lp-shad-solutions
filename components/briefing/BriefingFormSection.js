import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const CURRENT_PROCESS_OPTIONS = [
    "Manual",
    "Planilhas",
    "Outro sistema",
    "WhatsApp",
    "Outro",
];

const SOLUTION_OPTIONS = [
    "Sistema web",
    "Aplicativo mobile",
    "Ambos",
    "Não tenho certeza ainda",
];

const DEADLINE_OPTIONS = ["O quanto antes", "1 a 3 meses", "3 a 6 meses", "Sem prazo definido"];

const BUDGET_OPTIONS = [
    "Até R$3.000",
    "R$3.000 a R$6.000",
    "R$6.000 a R$10.000",
    "Acima de R$10.000",
    "Não sei ainda",
];

const INITIAL_FORM = {
    fullName: "",
    hasCompany: "Sim",
    companyName: "",
    email: "",
    whatsapp: "",
    city: "",
    projectIdea: "",
    projectProblem: "",
    currentProcess: CURRENT_PROCESS_OPTIONS[0],
    solutionType: SOLUTION_OPTIONS[0],
    desiredFeatures: "",
    deadline: DEADLINE_OPTIONS[0],
    budget: BUDGET_OPTIONS[0],
};

function FormField({ id, label, full = false, error = "", children }) {
    return (
        <div className={`briefing-field${full ? " full" : ""}${error ? " has-error" : ""}`}>
            <label htmlFor={id}>{label}</label>
            {children}
            {error ? (
                <span className="briefing-field-error" id={`${id}-error`}>
                    {error}
                </span>
            ) : null}
        </div>
    );
}

function formatWhatsApp(value) {
    const digits = value.replace(/\D/g, "").slice(0, 11);

    if (!digits.length) return "";

    if (digits.length < 3) return `(${digits}`;
    if (digits.length < 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length < 11) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;

    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function BriefingFormSection() {
    const [formData, setFormData] = useState(INITIAL_FORM);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [fieldErrors, setFieldErrors] = useState({});

    const getFieldValidationMessage = (field) => {
        if (field.validity.valueMissing) {
            return "Este campo é obrigatório.";
        }

        if (field.validity.typeMismatch && field.type === "email") {
            return "Informe um email válido.";
        }

        return "Preencha este campo corretamente.";
    };

    const validateForm = (formElement) => {
        const nextFieldErrors = {};
        const fields = formElement.querySelectorAll("input, select, textarea");

        fields.forEach((field) => {
            if (field.disabled || field.type === "hidden") return;

            if (!field.checkValidity()) {
                nextFieldErrors[field.name] = getFieldValidationMessage(field);
            }
        });

        setFieldErrors(nextFieldErrors);
        return nextFieldErrors;
    };

    const handleChange = (event) => {
        const { name, value, checked } = event.target;
        setError("");
        setFieldErrors((prev) => {
            if (!prev[name] && !(name === "hasCompany" && prev.companyName)) return prev;

            const next = { ...prev };
            delete next[name];
            if (name === "hasCompany") {
                delete next.companyName;
            }
            return next;
        });

        if (name === "hasCompany") {
            const hasCompanyValue = checked ? "Sim" : "Não";
            setFormData((prev) => ({
                ...prev,
                hasCompany: hasCompanyValue,
                companyName: checked ? prev.companyName : "",
            }));
            return;
        }

        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formElement = event.currentTarget;
        const currentFieldErrors = validateForm(formElement);

        if (Object.keys(currentFieldErrors).length > 0) {
            setError("Preencha os campos obrigatórios para continuar.");
            const [firstInvalidFieldName] = Object.keys(currentFieldErrors);
            const firstInvalidField = formElement.querySelector(
                `[name="${firstInvalidFieldName}"]`
            );
            firstInvalidField?.focus();
            return;
        }

        setLoading(true);
        setError("");
        setFieldErrors({});

        try {
            const response = await fetch("/api/briefing", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                throw new Error(data.error || "Não foi possível enviar o formulário.");
            }

            setSuccess(true);
        } catch (submitError) {
            setError(submitError.message || "Falha ao enviar o formulário.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="briefing-form-section" aria-labelledby="project-form-title">
            <div className="briefing-shell">
                <div className="briefing-section-head">
                    <span className="eyebrow">Iniciar projeto</span>
                    <h2 id="project-form-title">Conte sua ideia</h2>
                    <p>
                        Preencha as informações abaixo para entendermos melhor o seu cenário e
                        entrarmos em contato com os próximos passos.
                    </p>
                </div>

                <div className="briefing-form-wrap">
                    {loading ? (
                        <div className="briefing-status" role="status" aria-live="polite">
                            <Loader2 className="briefing-status-icon spinning" aria-hidden="true" />
                            <h3>Enviando formulário</h3>
                            <p>Estamos registrando as informações para análise.</p>
                        </div>
                    ) : success ? (
                        <div className="briefing-status" role="status" aria-live="polite">
                            <CheckCircle2
                                className="briefing-status-icon briefing-status-icon-success"
                                aria-hidden="true"
                            />
                            <h3>Recebemos sua ideia</h3>
                            <p>
                                Obrigado por compartilhar as informações do seu projeto. Nossa
                                equipe irá analisar os requisitos e entraremos em contato em breve.
                            </p>
                        </div>
                    ) : (
                        <form className="briefing-form" onSubmit={handleSubmit} noValidate>
                            {error ? (
                                <p className="briefing-error" role="alert">
                                    {error}
                                </p>
                            ) : null}

                            <div className="briefing-form-block">
                                <h3>Informações básicas</h3>
                                <div className="briefing-form-grid">
                                    <FormField
                                        id="briefing-full-name"
                                        label="Nome completo"
                                        error={fieldErrors.fullName}
                                    >
                                        <input
                                            id="briefing-full-name"
                                            name="fullName"
                                            type="text"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            aria-invalid={Boolean(fieldErrors.fullName)}
                                            aria-describedby={
                                                fieldErrors.fullName
                                                    ? "briefing-full-name-error"
                                                    : undefined
                                            }
                                            required
                                        />
                                    </FormField>

                                    <FormField id="briefing-has-company" label="Você tem empresa?">
                                        <label
                                            htmlFor="briefing-has-company"
                                            className="briefing-checkbox"
                                        >
                                            <input
                                                id="briefing-has-company"
                                                name="hasCompany"
                                                type="checkbox"
                                                checked={formData.hasCompany === "Sim"}
                                                onChange={handleChange}
                                            />
                                            <span>Sim, tenho empresa</span>
                                        </label>
                                    </FormField>

                                    {formData.hasCompany === "Sim" ? (
                                        <FormField
                                            id="briefing-company-name"
                                            label="Nome da empresa"
                                            error={fieldErrors.companyName}
                                        >
                                            <input
                                                id="briefing-company-name"
                                                name="companyName"
                                                type="text"
                                                value={formData.companyName}
                                                onChange={handleChange}
                                                aria-invalid={Boolean(fieldErrors.companyName)}
                                                aria-describedby={
                                                    fieldErrors.companyName
                                                        ? "briefing-company-name-error"
                                                        : undefined
                                                }
                                                required={formData.hasCompany === "Sim"}
                                            />
                                        </FormField>
                                    ) : null}

                                    <FormField
                                        id="briefing-email"
                                        label="Email"
                                        error={fieldErrors.email}
                                    >
                                        <input
                                            id="briefing-email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            aria-invalid={Boolean(fieldErrors.email)}
                                            aria-describedby={
                                                fieldErrors.email
                                                    ? "briefing-email-error"
                                                    : undefined
                                            }
                                            required
                                        />
                                    </FormField>

                                    <FormField
                                        id="briefing-whatsapp"
                                        label="WhatsApp"
                                        error={fieldErrors.whatsapp}
                                    >
                                        <input
                                            id="briefing-whatsapp"
                                            name="whatsapp"
                                            type="tel"
                                            inputMode="numeric"
                                            placeholder="(00) 00000-0000"
                                            value={formData.whatsapp}
                                            onChange={(event) => {
                                                setError("");
                                                setFieldErrors((prev) => {
                                                    if (!prev.whatsapp) return prev;
                                                    const next = { ...prev };
                                                    delete next.whatsapp;
                                                    return next;
                                                });

                                                setFormData((prev) => ({
                                                    ...prev,
                                                    whatsapp: formatWhatsApp(event.target.value),
                                                }));
                                            }}
                                            aria-invalid={Boolean(fieldErrors.whatsapp)}
                                            aria-describedby={
                                                fieldErrors.whatsapp
                                                    ? "briefing-whatsapp-error"
                                                    : undefined
                                            }
                                            required
                                        />
                                    </FormField>

                                    <FormField
                                        id="briefing-city"
                                        label="Cidade"
                                        full
                                        error={fieldErrors.city}
                                    >
                                        <input
                                            id="briefing-city"
                                            name="city"
                                            type="text"
                                            value={formData.city}
                                            onChange={handleChange}
                                            aria-invalid={Boolean(fieldErrors.city)}
                                            aria-describedby={
                                                fieldErrors.city
                                                    ? "briefing-city-error"
                                                    : undefined
                                            }
                                            required
                                        />
                                    </FormField>
                                </div>
                            </div>

                            <div className="briefing-form-block">
                                <h3>Sobre a ideia</h3>
                                <div className="briefing-form-grid">
                                    <FormField
                                        id="briefing-project-idea"
                                        label="Qual é a ideia do sistema ou aplicativo?"
                                        full
                                        error={fieldErrors.projectIdea}
                                    >
                                        <textarea
                                            id="briefing-project-idea"
                                            name="projectIdea"
                                            rows="4"
                                            value={formData.projectIdea}
                                            onChange={handleChange}
                                            aria-invalid={Boolean(fieldErrors.projectIdea)}
                                            aria-describedby={
                                                fieldErrors.projectIdea
                                                    ? "briefing-project-idea-error"
                                                    : undefined
                                            }
                                            required
                                        />
                                    </FormField>

                                    <FormField
                                        id="briefing-project-problem"
                                        label="Qual problema esse sistema resolveria na sua empresa?"
                                        full
                                        error={fieldErrors.projectProblem}
                                    >
                                        <textarea
                                            id="briefing-project-problem"
                                            name="projectProblem"
                                            rows="4"
                                            value={formData.projectProblem}
                                            onChange={handleChange}
                                            aria-invalid={Boolean(fieldErrors.projectProblem)}
                                            aria-describedby={
                                                fieldErrors.projectProblem
                                                    ? "briefing-project-problem-error"
                                                    : undefined
                                            }
                                            required
                                        />
                                    </FormField>

                                    <FormField
                                        id="briefing-current-process"
                                        label="Hoje como esse processo funciona?"
                                        error={fieldErrors.currentProcess}
                                    >
                                        <select
                                            id="briefing-current-process"
                                            name="currentProcess"
                                            value={formData.currentProcess}
                                            onChange={handleChange}
                                            aria-invalid={Boolean(fieldErrors.currentProcess)}
                                            aria-describedby={
                                                fieldErrors.currentProcess
                                                    ? "briefing-current-process-error"
                                                    : undefined
                                            }
                                            required
                                        >
                                            {CURRENT_PROCESS_OPTIONS.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </FormField>

                                    <FormField
                                        id="briefing-solution-type"
                                        label="Tipo de solução desejada"
                                        error={fieldErrors.solutionType}
                                    >
                                        <select
                                            id="briefing-solution-type"
                                            name="solutionType"
                                            value={formData.solutionType}
                                            onChange={handleChange}
                                            aria-invalid={Boolean(fieldErrors.solutionType)}
                                            aria-describedby={
                                                fieldErrors.solutionType
                                                    ? "briefing-solution-type-error"
                                                    : undefined
                                            }
                                            required
                                        >
                                            {SOLUTION_OPTIONS.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </FormField>

                                    <FormField
                                        id="briefing-desired-features"
                                        label="Funcionalidades desejadas"
                                        full
                                        error={fieldErrors.desiredFeatures}
                                    >
                                        <textarea
                                            id="briefing-desired-features"
                                            name="desiredFeatures"
                                            rows="5"
                                            className="briefing-large-textarea"
                                            value={formData.desiredFeatures}
                                            onChange={handleChange}
                                            aria-invalid={Boolean(fieldErrors.desiredFeatures)}
                                            aria-describedby={
                                                fieldErrors.desiredFeatures
                                                    ? "briefing-desired-features-error"
                                                    : undefined
                                            }
                                            required
                                        />
                                    </FormField>

                                    <FormField
                                        id="briefing-deadline"
                                        label="Prazo desejado"
                                        error={fieldErrors.deadline}
                                    >
                                        <select
                                            id="briefing-deadline"
                                            name="deadline"
                                            value={formData.deadline}
                                            onChange={handleChange}
                                            aria-invalid={Boolean(fieldErrors.deadline)}
                                            aria-describedby={
                                                fieldErrors.deadline
                                                    ? "briefing-deadline-error"
                                                    : undefined
                                            }
                                            required
                                        >
                                            {DEADLINE_OPTIONS.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </FormField>

                                    <FormField
                                        id="briefing-budget"
                                        label="Orçamento estimado"
                                        error={fieldErrors.budget}
                                    >
                                        <select
                                            id="briefing-budget"
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            aria-invalid={Boolean(fieldErrors.budget)}
                                            aria-describedby={
                                                fieldErrors.budget
                                                    ? "briefing-budget-error"
                                                    : undefined
                                            }
                                            required
                                        >
                                            {BUDGET_OPTIONS.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </FormField>
                                </div>
                            </div>

                            <div className="briefing-actions">
                                <button type="submit" className="btn primary briefing-submit">
                                    Enviar ideia do projeto
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
