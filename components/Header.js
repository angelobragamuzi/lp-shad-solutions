import React, { useState } from 'react'
import Image from 'next/image'
import Modal from './Modal'
import CustomSelect from './CustomSelect'

export default function Header() {
    const [open, setOpen] = useState(false)
    const [closing, setClosing] = useState(false)
    const [sending, setSending] = useState(false)
    const [error, setError] = useState(null)
    const [form, setForm] = useState({ name: '', email: '', phone: '', contactType: 'Empresa' })
    const ANIM_MS = 260

    function handleChange(e) {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    function startClose() {
        setClosing(true)
        setTimeout(() => {
            setOpen(false)
            setClosing(false)
        }, ANIM_MS)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setError(null)
        setSending(true)

        try {
            const resp = await fetch('/api/request-demo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })

            const data = await resp.json()
            if (!resp.ok) throw new Error(data.error || 'Erro desconhecido')

            // success
            setSending(false)
            startClose()
        } catch (err) {
            console.error(err)
            setError(err.message || 'Erro ao enviar')
            setSending(false)
        }
    }

    return (
        <header className="header">
            <div className="container nav">
                <div className="logo">
                    <Image
                        src="/images/logo.svg"
                        alt="ShadSolutions"
                        width={210}
                        height={56}
                        priority={false}
                    />
                </div>

                <button className="btn secondary" onClick={() => setOpen(true)}>
                    Solicitar demonstração
                </button>
            </div>

            {open && (
                <Modal>
                    <div className={`modal-overlay ${closing ? 'closing' : 'open'}`} onClick={startClose}>
                        <div className={`modal ${closing ? 'closing' : 'open'}`} onClick={e => e.stopPropagation()}>
                            <button className="modal-close" onClick={startClose} aria-label="Fechar">×</button>
                            <h3>Solicitar demonstração</h3>
                            <form className="modal-form" onSubmit={handleSubmit}>
                                <label>
                                    Nome
                                    <input name="name" value={form.name} onChange={handleChange} required />
                                </label>

                                <label>
                                    E-mail
                                    <input name="email" type="email" value={form.email} onChange={handleChange} required />
                                </label>

                                <label>
                                    Telefone
                                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} />
                                </label>

                                <label>
                                    Você está entrando em contato como
                                    <CustomSelect name="contactType" value={form.contactType} onChange={handleChange} options={["Empresa", "Pessoa", "Parceiro", "Outro"]} />
                                </label>

                                <div className="modal-actions">
                                    <button type="submit" className="btn primary">Enviar</button>
                                    <button type="button" className="btn secondary" onClick={startClose}>Fechar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal>
            )}
        </header>
    )
}