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
