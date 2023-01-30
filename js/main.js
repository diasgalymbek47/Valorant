//Код menu__item-а в header-е
const submenuBtn = document.querySelectorAll('.header__menu-item-link-submenuBtn')

submenuBtn.forEach(el => {
    el.addEventListener('click', () => {
        const parentEl = el.closest('.header__menu-item')
        parentEl.classList.toggle('active')
    })
})


//Код user-а в header-е
const usermenuBtn = document.querySelector('.header__user-menuBtn')

usermenuBtn.addEventListener('click', () => {
    const parentEl = usermenuBtn.closest('.header__user')
    parentEl.classList.toggle('active')
})