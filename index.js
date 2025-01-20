const isMobile = () => window.innerWidth <= 768

let cursorEnabled = !isMobile()
const themeBtn = document.querySelector('#theme-switcher')
const cursor = document.querySelector('.cursor')

themeBtn.addEventListener('click', () => {
    const html = document.querySelector('html')
    html.classList.toggle('light')
    themeBtn.classList.toggle('active')
})

window.addEventListener('resize', () => {
    cursorEnabled = !isMobile()
})

const interactiveElements = ['A', 'BUTTON', 'INPUT', 'TEXTAREA']
const isHoverInteractiveElement = (x, y) => {
    const element = document.elementFromPoint(x, y)
    return interactiveElements.includes(element.tagName)
}

window.addEventListener('mousemove', (e) => {
    if (!cursorEnabled) return

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
