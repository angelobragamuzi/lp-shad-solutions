import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ children, onClose, loading, success }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = ''
            setMounted(false)
        }
    }, [])

    if (!mounted) return null

    return createPortal(
        <div
            className="modal-backdrop"
            onClick={() => {
                if (!loading) onClose()
            }}
        >
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                {/* LOADING */}
                {loading && (
                    <div className="modal-status">
                        <div className="spinner" />
                        <p>Enviando solicitação...</p>
                    </div>
                )}

                {/* SUCESSO */}
                {!loading && success && (
                    <div className="modal-status">
                        <h3>Solicitação enviada ✅</h3>
                        <p>
                            Um representante entrará em contato com você em breve.
                        </p>

                        <button
                            className="btn primary"
                            onClick={onClose}
                        >
                            Fechar
                        </button>
                    </div>
                )}

                {/* FORM */}
                {!loading && !success && children}
            </div>
        </div>,
        document.body
    )
}
