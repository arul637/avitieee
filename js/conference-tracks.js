let button = document.querySelectorAll(".theme-selector button")
let description = document.querySelectorAll(".theme-descriptions")
let description_title = document.querySelector(".theme-title")

let theme_titles = [
    "Cognitive Computing & Intelligent Systems",
    "Artificial Intelligence & Machine Learning", 
    "Data Intelligence & Analytics",
    "AI-Driven IoT & Smart Systems",
    "Security, Privacy & Trust in AI",
    "Emerging & Future Computing Technologies",
    "AI Applications & Interdisciplinary Research"
]

let description_content = [
    [
        ["Cognitive architectures", "Knowledge representation & reasoning", "Brain-inspired computing", "Cognitive robotics", "Human–computer cognition", "Decision-support systems"]
    ],
    [
        ["Machine learning & deep learning", "Explainable & trustworthy AI", "Generative AI & foundation models", "Reinforcement learning", "AI ethics & fairness", "AI applications in real-world systems"]
    ],
    [
        ["Big data analytics", "Data mining & pattern recognition", "Data visualization", "Predictive & prescriptive analytics", "Data governance & quality", "Intelligent databases"]
    ],
    [
        ["AI for IoT & edge computing", "Smart cities & smart grids", "Cyber-physical systems", "Intelligent transportation systems", "Industry 4.0 / 5.0"]
    ],
    [
        ["AI for cybersecurity", "Privacy-preserving AI", "Secure data analytics", "Blockchain for trust management", "Adversarial machine learning"]
    ],
    [
        ["Quantum-inspired computing", "Federated learning", "Cloud, fog & edge intelligence", "Green & sustainable computing", "Digital twins"]
    ],
    [
        ["AI in healthcare & biomedical systems", "AI in agriculture & environment", "AI in finance & business intelligence", "AI in education & learning analytics", "Social impact of AI"]
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