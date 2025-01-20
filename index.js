const themeBtn = document.querySelector('#theme-switcher')

themeBtn.addEventListener('click', () => {
    const html = document.querySelector('html')
    html.classList.toggle('light')
    themeBtn.classList.toggle('active')
})
