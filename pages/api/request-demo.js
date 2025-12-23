import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const { name, email, phone, contactType } = req.body

    if (!name || !email) {
        return res.status(400).json({
            error: 'Nome e e-mail são obrigatórios',
        })
    }

    try {
        await resend.emails.send({
            from: process.env.FROM_EMAIL,
            to: process.env.TO_EMAIL,
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
        console.error(err)
        return res.status(500).json({
            error: 'Erro ao enviar e-mail',
        })
    }
}
