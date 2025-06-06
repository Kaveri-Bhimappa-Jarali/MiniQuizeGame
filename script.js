const que = document.getElementById("question");
const ans = document.getElementById("answer");
const opt = document.getElementById("options");
const backBtn = document.getElementById("back");
const nextBtn = document.getElementById("next");
const sbt=document.getElementById("SubmitContainer");

const quiz = [
    { Question: "Champians of IPL in 2025?", Options: ["CSK", "RCB", "MI", "KSR"], Answer: "RCB" },
    { Question: "Capital city of India?", Options: ["Delhi", "Mumbai", "Bengaluru", "Belagavi"], Answer: "Delhi" },
    { Question: "Second Capital city of Karnataka?", Options: ["Delhi", "Mumbai", "Bengaluru", "Belagavi"], Answer: "Belagavi" },
    { Question: "Who is the Prime Minister of India (2024)?", Options: ["Rahul Gandhi", "Narendra Modi", "Amit Shah", "Arvind Kejriwal"], Answer: "Narendra Modi" },
    { Question: "Largest state in India by area?", Options: ["Uttar Pradesh", "Rajasthan", "Maharashtra", "Madhya Pradesh"], Answer: "Rajasthan" },
    { Question: "National bird of India?", Options: ["Peacock", "Sparrow", "Crow", "Parrot"], Answer: "Peacock" },
    { Question: "Which river is the longest in India?", Options: ["Ganga", "Yamuna", "Brahmaputra", "Godavari"], Answer: "Ganga" },
    { Question: "Who wrote the Indian National Anthem?", Options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Mahatma Gandhi", "Jawaharlal Nehru"], Answer: "Rabindranath Tagore" },
    { Question: "Which planet is known as the Red Planet?", Options: ["Earth", "Mars", "Jupiter", "Venus"], Answer: "Mars" },
    { Question: "Which is the smallest continent?", Options: ["Asia", "Australia", "Europe", "Antarctica"], Answer: "Australia" }
];

let idx = 0;
let markedOption = [];

document.getElementById("user").innerText = "Hello, " + (sessionStorage.getItem("userName") || "User");

function display() {
    ans.innerHTML = "";
    if (idx < quiz.length) {
        que.innerHTML = quiz[idx].Question;
        opt.innerHTML = quiz[idx].Options.map(option => {
            const checked = markedOption[idx] === option ? "checked" : "";
            return `<input id="input" type="radio" name="choice" value="${option}" ${checked}> ${option}<br>`;
        }).join("");
        
        sbt.innerHTML = (idx === quiz.length-1) ?`<form action="/submit.php" methos="post"><input type="submit" id="submit" onclick = "checkAnswer()"></form>`:"";

        backBtn.style.display = idx > 0 ? "inline" : "none";
        nextBtn.style.display = idx < quiz.length - 1 ? "inline" : "none";
    }
}

function checkAnswer() {
    let resultarray=[];
    const marked = document.querySelector('input[name="choice"]:checked');
    if (marked) {
        markedOption[idx] = marked.value;
    }

    let score = 0;
    for (let i = 0; i < markedOption.length; i++) {
        if (markedOption[i] === quiz[i].Answer) {
            score++;
        }
    }
    que.innerHTML = `You scored ${score} out of ${quiz.length}`;
    opt.innerHTML = "";
    backBtn.style.display = "none";
    nextBtn.style.display = "none";
    sbt.innerHTML ="";

}


backBtn.onclick = () => {
    const marked = document.querySelector('input[name="choice"]:checked');
    if (marked){
        markedOption[idx] = marked.value;
    }
    if (idx > 0) {
        idx--;
        display();
    }
};

nextBtn.onclick = () => {
    const marked = document.querySelector('input[name="choice"]:checked');
    if (marked){
         markedOption[idx] = marked.value;
    }
    if (idx < quiz.length - 1) {
        idx++;
        display();
    }
};

window.onload = display;
