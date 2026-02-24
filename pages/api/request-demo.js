import { Resend } from "resend";

const resend = new Resend(
    process.env.RESEND_API_KEY || "re_eJ9S5UvF_MEYGkFBPyDA6rNE3Q25egCap"
);

const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "ShadSolutions <onboarding@resend.dev>";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "shadsolutionsinteligence@gmail.com";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { name, email, phone, contactType, company, description } = req.body || {};

    if (!name || !email) {
        return res.status(400).json({
            error: "Nome e e-mail são obrigatórios.",
        });
    }

    const subjectPrefix = contactType ? `Novo contato - ${contactType}` : "Novo contato";

    const text = [
        `Nome: ${name}`,
        `E-mail: ${email}`,
        `Telefone: ${phone || "-"}`,
        `Tipo de contato: ${contactType || "-"}`,
        `Empresa: ${company || "-"}`,
        "",
        "Descrição da necessidade:",
        description || "-",
    ].join("\n");

    try {
        await resend.emails.send({
            from: FROM_EMAIL,
            to: [TO_EMAIL],
            subject: `${subjectPrefix} - ${name}`,
            text,
        });

        return res.status(200).json({ ok: true });
    } catch (error) {
        console.error("Erro Resend:", error);
        return res.status(500).json({
            error: "Erro ao enviar e-mail.",
        });
    }
}