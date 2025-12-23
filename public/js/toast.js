window.showToast = function (message, options = {}) {
    const duration = options.duration || 3000

    const old = document.querySelector('.toast')
    if (old) old.remove()

    const toast = document.createElement('div')
    toast.className = 'toast'
    toast.textContent = message

    document.body.appendChild(toast)

    requestAnimationFrame(() => {
        toast.classList.add('show')
    })

    setTimeout(() => {
        toast.classList.remove('show')
        toast.addEventListener('transitionend', () => toast.remove())
    }, duration)
}
