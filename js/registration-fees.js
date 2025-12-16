let indian_author = document.getElementById("indian-author")
let foreign_author = document.getElementById("foreign-author")

let selected_author = document.querySelector(".author-selected")

indian_author.addEventListener("click", function() {
    selected_author.querySelector("p").textContent = "Indian Author"
    document.querySelector(".ug-ieee").textContent = "₹ 1500"
    document.querySelector(".ug-non-ieee").textContent = "₹ 2000"
    document.querySelector(".ac-ieee").textContent = "₹ 2000"
    document.querySelector(".ac-non-ieee").textContent = "₹ 2500"
    document.querySelector(".id-ieee").textContent = "-"
    document.querySelector(".id-non-ieee").textContent = "₹ 3000"
    document.querySelector(".listener1").textContent = "₹ 1000"
    document.querySelector(".listener2").textContent = "₹ 1000"
})

foreign_author.addEventListener("click", function() {
    selected_author.querySelector("p").textContent = "Foreign Author"
    document.querySelector(".ug-ieee").textContent = "$ 125"
    document.querySelector(".ug-non-ieee").textContent = "$ 150"
    document.querySelector(".ac-ieee").textContent = "$ 125"
    document.querySelector(".ac-non-ieee").textContent = "$ 150"
    document.querySelector(".id-ieee").textContent = "$ 125"
    document.querySelector(".id-non-ieee").textContent = "$ 150"
    document.querySelector(".listener1").textContent = "$ 50"
    document.querySelector(".listener2").textContent = "$ 50"
})