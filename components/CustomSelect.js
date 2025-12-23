import React, { useEffect, useRef, useState } from 'react'

export default function CustomSelect({ name, value, onChange, options = [] }) {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        function onDoc(e) {
            if (!ref.current) return
            if (!ref.current.contains(e.target)) setOpen(false)
        }
        document.addEventListener('mousedown', onDoc)
        document.addEventListener('touchstart', onDoc)
        return () => {
            document.removeEventListener('mousedown', onDoc)
            document.removeEventListener('touchstart', onDoc)
        }
    }, [])

    function handleSelect(v) {
        // mimic event shape for Header.handleChange
        onChange({ target: { name, value: v } })
        setOpen(false)
    }

    return (
        <div className={`custom-select${open ? ' open' : ''}`} ref={ref}>
            <button type="button" className="custom-select-trigger btn" onClick={() => setOpen(s => !s)} aria-haspopup="listbox" aria-expanded={open}>
                <span className="custom-select-value">{value}</span>
                <svg className="custom-select-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <polyline points="6 9 12 15 18 9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {open && (
                <ul className="custom-select-list" role="listbox" onClick={e => e.stopPropagation()}>
                    {options.map(opt => (
                        <li
                            key={opt}
                            role="option"
                            aria-selected={opt === value}
                            className={`custom-select-item ${opt === value ? 'selected' : ''}`}
                            onMouseDown={e => { e.preventDefault(); e.stopPropagation(); handleSelect(opt); }}
                            onClick={e => { e.stopPropagation(); }}
                        >
                            {opt}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
