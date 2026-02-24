import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export default function Modal({ children, onClose, closeDisabled = false }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        document.body.style.overflow = "hidden";

        const handleEscape = (event) => {
            if (event.key === "Escape" && !closeDisabled) {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleEscape);
            setMounted(false);
        };
    }, [closeDisabled, onClose]);

    if (!mounted) return null;

    return createPortal(
        <div
            className="modal-backdrop"
            onClick={() => {
                if (!closeDisabled) onClose();
            }}
        >
            <div className="modal-content" onClick={(event) => event.stopPropagation()}>
                <button
                    type="button"
                    className="modal-close"
                    onClick={onClose}
                    aria-label="Fechar modal"
                    disabled={closeDisabled}
                >
                    <X size={16} strokeWidth={2} aria-hidden="true" />
                </button>

                {children}
            </div>
        </div>,
        document.body
    );
}
