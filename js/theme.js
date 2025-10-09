let button = document.querySelectorAll(".theme-selector button")
let description = document.querySelectorAll(".theme-descriptions")
let description_title = document.querySelector(".theme-title")

let theme_titles = [
    "Communication Technologies",
    "Computing & Data Management", 
    "Energy Systems & Management",
    "Bio- Informatics"
]

let description_content = [
    [
        ["theme 1 content", "theme 1 content"],
        ["theme 1 content", "theme 1 content"]
    ],
    [
        ["theme 2 content", "theme 2 content"],
        ["theme 2 content", "theme 2 content"]
    ],
    [
        ["theme 3 content", "theme 3 content", "theme 3 content"],
        ["theme 3 content", "theme 3 content"]
    ],
    [
        ["theme 4 content", "theme 4 content"],
        ["theme 4 content", "theme 4 content"]
    ]
]

button.forEach(function(btn, index) {
    btn.addEventListener("click", function() {
        description_title.textContent = theme_titles[index]
        description.forEach(function(e) {
            e.innerHTML = ""
            let div = document.createElement("div")
            div.className = "description"
            
            description_content[index].forEach(function(group) {
                let ul = document.createElement("ul")
                group.forEach(function(item) {
                    let li = document.createElement("li")
                    li.textContent = item
                    ul.appendChild(li)
                })
                div.appendChild(ul)
            })

            e.appendChild(div)
        })
    })
})