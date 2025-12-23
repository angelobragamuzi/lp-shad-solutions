import { Resend } from 'resend'

const resend = new Resend('re_eJ9S5UvF_MEYGkFBPyDA6rNE3Q25egCap')

const FROM_EMAIL = 'ShadSolutions <onboarding@resend.dev>'
const TO_EMAIL = 'shadsolutionsinteligence@gmail.com'

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const { name, email, phone, contactType } = req.body || {}

    if (!name || !email) {
        return res.status(400).json({
            error: 'Nome e e-mail são obrigatórios',
        })
    }

    try {
        await resend.emails.send({
            from: FROM_EMAIL,
            to: TO_EMAIL,
            subject: `Solicitação de demonstração — ${name}`,
            text: `
Nome: ${name}
E-mail: ${email}
Telefone: ${phone || '-'}
Tipo de contato: ${contactType || '-'}
            `.trim(),
        })

        return res.status(200).json({ ok: true })
    } catch (err) {
        console.error('Erro Resend:', err)
        return res.status(500).json({
            error: 'Erro ao enviar e-mail',
        })
    }
}
