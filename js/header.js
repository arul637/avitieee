let navigation = document.querySelector('header .navigation')
let hamburger = document.querySelector('header .hamburger')

hamburger.addEventListener('click', function() {
    if (navigation.classList.contains('navigation')) {
        navigation.classList.remove('navigation')
        navigation.classList.toggle('active')
    } else {
        navigation.classList.add('navigation')
        navigation.classList.remove('active')
    }
})