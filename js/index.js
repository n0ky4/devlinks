const themeChangeCallbacks = []
const themeBtn = document.querySelector('#theme-switcher')

const onThemeChange = (callback) => {
    if (!themeChangeCallbacks.includes(callback)) themeChangeCallbacks.push(callback)
}

function callThemeCallbacks(newTheme) {
    themeChangeCallbacks.forEach((cb) => {
        cb(newTheme)
    })
}

themeBtn.addEventListener('click', () => {
    const html = document.querySelector('html')

    const newTheme = html.classList.contains('light') ? 'dark' : 'light'
    html.classList.toggle('light')
    themeBtn.classList.toggle('active')

    callThemeCallbacks(newTheme)
})

const honk = new Audio('https://n0ky4.github.io/devlinks/assets/honk.mp3')
honk.volume = 0.15
honk.load()

const avatar = document.querySelector('#avatar')

avatar.addEventListener('click', () => {
    honk.pause()
    honk.currentTime = 0
    honk.play()
})
