let indian_author = document.getElementById("indian-author")
let foreign_author = document.getElementById("foreign-author")

let selected_author = document.querySelector(".author-selected")

indian_author.addEventListener("click", function() {
    selected_author.querySelector("p").textContent = "Indian Author"
    document.querySelector(".ug-ieee").textContent = "₹ 7000"
    document.querySelector(".ug-non-ieee").textContent = "₹ 7500"
    document.querySelector(".ac-ieee").textContent = "₹ 8000"
    document.querySelector(".ac-non-ieee").textContent = "₹ 8500"
    document.querySelector(".id-ieee").textContent = "₹ 8000"
    document.querySelector(".id-non-ieee").textContent = "₹ 8500"
})

foreign_author.addEventListener("click", function() {
    selected_author.querySelector("p").textContent = "Foreign Author"
    document.querySelector(".ug-ieee").textContent = "$ 125"
    document.querySelector(".ug-non-ieee").textContent = "$ 150"
    document.querySelector(".ac-ieee").textContent = "$ 125"
    document.querySelector(".ac-non-ieee").textContent = "$ 150"
    document.querySelector(".id-ieee").textContent = "$ 125"
    document.querySelector(".id-non-ieee").textContent = "$ 150"
})