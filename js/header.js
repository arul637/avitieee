let navigation = document.querySelector("header .navigation")
let hamburger = document.querySelector("header .hamburger")

hamburger.addEventListener("click", function() {
    if (navigation.classList.contains("navigation")) {
        navigation.classList.remove("navigation")
        navigation.classList.add("active")
    } else {
        navigation.classList.remove("active")
        navigation.classList.add("navigation")
    }
})