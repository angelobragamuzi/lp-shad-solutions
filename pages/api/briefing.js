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

    const {
        fullName,
        hasCompany,
        companyName,
        email,
        whatsapp,
        city,
        projectIdea,
        projectProblem,
        currentProcess,
        solutionType,
        desiredFeatures,
        deadline,
        budget,
    } = req.body || {};

    const requiredFields = [
        fullName,
        hasCompany,
        email,
        whatsapp,
        city,
        projectIdea,
        projectProblem,
        currentProcess,
        solutionType,
        desiredFeatures,
        deadline,
        budget,
    ];

    if (requiredFields.some((field) => !field)) {
        return res.status(400).json({
            error: "Preencha todos os campos obrigatórios do formulário.",
        });
    }

    if (hasCompany === "Sim" && !companyName) {
        return res.status(400).json({
            error: "Informe o nome da empresa.",
        });
    }

    const text = [
        "Nova ideia de projeto",
        "",
        "Informações básicas:",
        `Nome completo: ${fullName}`,
        `Tem empresa?: ${hasCompany}`,
        `Empresa: ${hasCompany === "Sim" ? companyName : "-"}`,
        `Email: ${email}`,
        `WhatsApp: ${whatsapp}`,
        `Cidade: ${city}`,
        "",
        "Sobre o projeto:",
        `Ideia do sistema/app: ${projectIdea}`,
        `Problema que resolve: ${projectProblem}`,
        `Processo atual: ${currentProcess}`,
        `Tipo de solução: ${solutionType}`,
        `Funcionalidades desejadas: ${desiredFeatures}`,
        `Prazo desejado: ${deadline}`,
        `Orçamento estimado: ${budget}`,
    ].join("\n");

    try {
        await resend.emails.send({
            from: FROM_EMAIL,
            to: [TO_EMAIL],
            subject: `Nova ideia de projeto - ${fullName}`,
            text,
        });

        return res.status(200).json({ ok: true });
    } catch (error) {
        console.error("Erro Resend (briefing):", error);
        return res.status(500).json({
            error: "Erro ao enviar formulário.",
        });
    }
}
