// Usar regex para detectar se o usuário está no Mobile
const isMobile = () => {
    const userAgent = navigator.userAgent
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
}

let cursorEnabled = !isMobile()

const cursor = document.querySelector('.cursor')

window.addEventListener('resize', () => {
    cursorEnabled = !isMobile()
})

const interactiveElements = ['A', 'BUTTON', 'INPUT', 'TEXTAREA']
const isHoverInteractiveElement = (x, y) => {
    const element = document.elementFromPoint(x, y)
    if (!element || !element?.tagName) return
    return interactiveElements.includes(element.tagName)
}

window.addEventListener('mousemove', (e) => {
    if (!cursorEnabled) {
        cursor.classList.add('hidden')
        return
    }

    if (cursor.classList.contains('hidden')) cursor.classList.remove('hidden')

    const x = e.clientX
    const y = e.clientY
    cursor.style.left = `${x}px`
    cursor.style.top = `${y}px`

    if (isHoverInteractiveElement(x, y)) {
        cursor.classList.add('hover')
    } else {
        cursor.classList.remove('hover')
    }
})
