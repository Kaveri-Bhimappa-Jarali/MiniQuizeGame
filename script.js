const que = document.getElementById("question");
const ans = document.getElementById("answer");
const opt = document.getElementById("options");
const backBtn = document.getElementById("back");
const nextBtn = document.getElementById("next");
const sbt=document.getElementById("SubmitContainer");

const quiz = [
    { Question: "Capital city of India?", Options: ["Delhi", "Mumbai", "Bengaluru", "Belagavi"], Answer: "Delhi" },
    { Question: "Second Capital city of Karnataka?", Options: ["Delhi", "Mumbai", "Bengaluru", "Belagavi"], Answer: "Belagavi" },
    { Question: "Who is the Prime Minister of India (2024)?", Options: ["Rahul Gandhi", "Narendra Modi", "Amit Shah", "Arvind Kejriwal"], Answer: "Narendra Modi" },
    // { Question: "Largest state in India by area?", Options: ["Uttar Pradesh", "Rajasthan", "Maharashtra", "Madhya Pradesh"], Answer: "Rajasthan" },
    // { Question: "National bird of India?", Options: ["Peacock", "Sparrow", "Crow", "Parrot"], Answer: "Peacock" },
    // { Question: "Which river is the longest in India?", Options: ["Ganga", "Yamuna", "Brahmaputra", "Godavari"], Answer: "Ganga" },
    // { Question: "Who wrote the Indian National Anthem?", Options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Mahatma Gandhi", "Jawaharlal Nehru"], Answer: "Rabindranath Tagore" },
    // { Question: "Which planet is known as the Red Planet?", Options: ["Earth", "Mars", "Jupiter", "Venus"], Answer: "Mars" },
    // { Question: "Which is the smallest continent?", Options: ["Asia", "Australia", "Europe", "Antarctica"], Answer: "Australia" },
    // { Question: "How many states are there in India?", Options: ["28", "29", "27", "30"], Answer: "28" }
];

let idx = 0;
let markedOption = new Array(quiz.length).fill(null);

document.getElementById("user").innerText = "Hello, " + (sessionStorage.getItem("userName") || "User");

function display() {
    ans.innerHTML = "";

    if (idx < quiz.length) {
        que.innerHTML = quiz[idx].Question;
        opt.innerHTML = quiz[idx].Options.map(option => {
            const checked = markedOption[idx] === option ? "checked" : "";
            return `<input id="input" type="radio" name="choice" value="${option}" ${checked}> ${option}<br>`;
        }).join("");

        document.getElementById("SubmitContainer").innerHTML = 
            (idx === quiz.length-1) ?`<button id="submit" onclick = "checkAnswer()">Submit Answer</button>`:"";

        backBtn.style.display = idx > 0 ? "inline" : "none";
        nextBtn.style.display = idx < quiz.length - 1 ? "inline" : "none";
    }
}

function checkAnswer() {
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

// const que = document.getElementById("question");
// const ans = document.getElementById("answer");
// const opt = document.getElementById("options");
// const backBtn = document.getElementById("back");
// const nextBtn = document.getElementById("next");

// const quiz = [
//     { Question: "Capital city of India?", Options: ["Delhi", "Mumbai", "Bengaluru", "Belagavi"], Answer: "Delhi" },
//     { Question: "Second Capital city of Karnataka?", Options: ["Delhi", "Mumbai", "Bengaluru", "Belagavi"], Answer: "Belagavi" },
//     { Question: "Who is the Prime Minister of India (2024)?", Options: ["Rahul Gandhi", "Narendra Modi", "Amit Shah", "Arvind Kejriwal"], Answer: "Narendra Modi" },
//      { Question: "Largest state in India by area?", Options: ["Uttar Pradesh", "Rajasthan", "Maharashtra", "Madhya Pradesh"], Answer: "Rajasthan" },
//     { Question: "National bird of India?", Options: ["Peacock", "Sparrow", "Crow", "Parrot"], Answer: "Peacock" },
//     { Question: "Which river is the longest in India?", Options: ["Ganga", "Yamuna", "Brahmaputra", "Godavari"], Answer: "Ganga" },
//     { Question: "Who wrote the Indian National Anthem?", Options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Mahatma Gandhi", "Jawaharlal Nehru"], Answer: "Rabindranath Tagore" },
//     { Question: "Which planet is known as the Red Planet?", Options: ["Earth", "Mars", "Jupiter", "Venus"], Answer: "Mars" },
//     { Question: "Which is the smallest continent?", Options: ["Asia", "Australia", "Europe", "Antarctica"], Answer: "Australia" },
//     { Question: "How many states are there in India?", Options: ["28", "29", "27", "30"], Answer: "28" }
// ];

// let idx = 0;
// let markedOption = new Array(quiz.length).fill(null);

// document.getElementById("user").innerText = "Hello, " + (sessionStorage.getItem("userName") || "User");

// function display() {
//     ans.innerHTML = "";

//     if (idx < quiz.length) {
//         que.innerHTML = quiz[idx].Question;
//         opt.innerHTML = quiz[idx].Options.map(option => {
//             const checked = markedOption[idx] === option ? "checked" : "";
//             return `<input type="radio" name="choice" value="${option}" ${checked}> ${option}<br>`;
//         }).join("");
//         document.getElementById("SubmitContainer").innerHTML = 
//             (idx === quiz.length-1) ? `<button id="submit">Submit Answer</button>` :"";

//         const submitBtn = document.getElementById("submit").onclick = checkAnswer;

//         backBtn.style.display = idx > 0 ? "inline" : "none";
//         nextBtn.style.display = idx < quiz.length - 1 ? "inline" : "none";
//     }
// }

// function checkAnswer() {
//     const marked = document.querySelector('input[name="choice"]:checked');
//     if (marked) {
//         markedOption[idx] = marked.value;
//     }

//     let score = 0;
//     for (let i = 0; i < markedOption.length; i++) {
//         if (markedOption[i] === quiz[i].Answer) {
//             score++;
//         }
//     }

//     que.innerHTML = `You scored ${score} out of ${quiz.length}`;
//     opt.innerHTML = "";
//     backBtn.style.display = "none";
//     nextBtn.style.display = "none";
//     document.getElementById("SubmitContainer").innerHTML = "";
// }

// backBtn.onclick = () => {
//     const marked = document.querySelector('input[name="choice"]:checked');
//     if (marked){
//         markedOption[idx] = marked.value;
//     }
//     if (idx > 0) {
//         idx--;
//         display();
//     }
// };

// nextBtn.onclick = () => {
//     const marked = document.querySelector('input[name="choice"]:checked');
//     if (marked){
//          markedOption[idx] = marked.value;
//     }
//     if (idx < quiz.length - 1) {
//         idx++;
//         display();
//     }
// };

// window.onload = display;
