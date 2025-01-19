const themeSwitcherBtn = document.querySelector('#theme-switcher')

themeSwitcherBtn.addEventListener('click', () => {
    const html = document.querySelector('html')
    html.classList.toggle('light')

    themeSwitcherBtn.classList.toggle('active')
})
