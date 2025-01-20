// Usar regex para detectar se o usuário está no Mobile
const isMobile = () => {
    const userAgent = navigator.userAgent
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
}

let cursorEnabled = !isMobile()
let movedAt = 0

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

    const x = e.clientX
    const y = e.clientY
    cursor.style.left = `${x}px`
    cursor.style.top = `${y}px`

    if (isHoverInteractiveElement(x, y)) {
        cursor.classList.add('hover')
    } else {
        cursor.classList.remove('hover')
    }

    movedAt = Date.now()
})

// Esconder o cursor se ele estiver parado por mais
// de 5 segundos
const cursorTimeout = () => {
    if (Date.now() - movedAt >= 5000) {
        cursor.classList.add('hidden')
    } else {
        cursor.classList.remove('hidden')
    }

    requestAnimationFrame(cursorTimeout)
}

requestAnimationFrame(cursorTimeout)
