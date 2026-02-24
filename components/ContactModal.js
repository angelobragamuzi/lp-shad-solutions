import { useEffect, useState } from "react";
import { CheckCircle2, Loader2, ShieldCheck, Timer } from "lucide-react";
import Modal from "./Modal";

const INITIAL_FORM = {
    name: "",
    email: "",
    phone: "",
    contactType: "Novo projeto",
};

const CONTACT_OPTIONS = [
    "Novo projeto",
    "Software sob medida",
    "Automação de processos",
    "Suporte técnico",
];

export default function ContactModal({ open, onClose }) {
    const [formData, setFormData] = useState(INITIAL_FORM);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!open) {
            setFormData(INITIAL_FORM);
            setLoading(false);
            setSuccess(false);
            setError("");
        }
    }, [open]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch("/api/request-demo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
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

    if (!open) return null;

    return (
        <Modal onClose={onClose} closeDisabled={loading}>
            {loading ? (
                <div className="contact-modal-status" role="status" aria-live="polite">
                    <Loader2 className="contact-modal-status-icon spinning" aria-hidden="true" />
                    <h3>Enviando solicitação</h3>
                    <p>Estamos validando seus dados para direcionar o especialista ideal.</p>
                </div>
            ) : success ? (
                <div className="contact-modal-status" role="status" aria-live="polite">
                    <CheckCircle2 className="contact-modal-status-icon success" aria-hidden="true" />
                    <h3>Solicitação enviada com sucesso</h3>
                    <p>Retornaremos em breve com os próximos passos do seu atendimento.</p>
                    <div className="contact-modal-status-actions">
                        <button type="button" className="btn primary" onClick={onClose}>
                            Fechar
                        </button>
                    </div>
                </div>
            ) : (
                <form className="contact-modal-form" onSubmit={handleSubmit}>
                    <header className="contact-modal-header">
                        <span className="contact-modal-kicker">Contato</span>
                        <h3>Fale com um especialista</h3>
                        <p>
                            Conte seu cenário e retornamos com uma proposta objetiva para o seu
                            negócio.
                        </p>
                    </header>

                    <div className="contact-modal-highlights" aria-hidden="true">
                        <div className="contact-modal-highlight">
                            <Timer size={16} strokeWidth={2} />
                            <span>Retorno rápido</span>
                        </div>
                        <div className="contact-modal-highlight">
                            <ShieldCheck size={16} strokeWidth={2} />
                            <span>Atendimento técnico</span>
                        </div>
                    </div>

                    {error && (
                        <p className="contact-modal-error" role="alert">
                            {error}
                        </p>
                    )}

                    <div className="contact-modal-grid">
                        <div className="contact-modal-field">
                            <label htmlFor="modal-name">Nome</label>
                            <input
                                id="modal-name"
                                name="name"
                                type="text"
                                placeholder="Seu nome"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="contact-modal-field">
                            <label htmlFor="modal-email">E-mail</label>
                            <input
                                id="modal-email"
                                name="email"
                                type="email"
                                placeholder="voce@empresa.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="contact-modal-field">
                            <label htmlFor="modal-phone">Telefone</label>
                            <input
                                id="modal-phone"
                                name="phone"
                                type="tel"
                                placeholder="(00) 00000-0000"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="contact-modal-field">
                            <label htmlFor="modal-contact-type">Tipo de contato</label>
                            <select
                                id="modal-contact-type"
                                name="contactType"
                                value={formData.contactType}
                                onChange={handleChange}
                                required
                            >
                                {CONTACT_OPTIONS.map((option) => (
                                    <option value={option} key={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="contact-modal-actions">
                        <button type="submit" className="btn primary">
                            Enviar contato
                        </button>
                        <button type="button" className="btn secondary" onClick={onClose}>
                            Cancelar
                        </button>
                    </div>
                </form>
            )}
        </Modal>
    );
}
