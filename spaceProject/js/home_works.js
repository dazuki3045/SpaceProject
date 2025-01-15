const emailInput = document.querySelector("#gmail_input");
const emailButton = document.querySelector("#gmail_button");
const emailResult = document.querySelector("#gmail_result");

const regExp = /^[a-zA-Z0-9+_.-]+@gmail\.com$/;

emailButton.onclick = () => {
    if (regExp.test(emailInput.value)) {
        emailResult.innerHTML = "OK"
        emailResult.style.color = "green"
    } else {
        emailResult.innerHTML = "NoT OK"
        emailResult.style.color = "red"
    }
}

let num = 0;
let num1 = 0;

const parentBlock = document.querySelector(".parent_block")
const move = document.querySelector(".child_block");
const offWidth = parentBlock.offsetWidth - move.offsetWidth

const countFunction = () => {
    if (num <= offWidth && num1 === 0) num++
    else if (num >= offWidth && num1 < offWidth) num1++
    else if (num >= 1 && num1 === offWidth) num--
    else if (num < offWidth && num1 >= 1) num1--

    move.style.left = num + "px";
    move.style.top = num1 + "px";

    requestAnimationFrame(countFunction)
}
countFunction()

const time = document.querySelector("#seconds");
const start = document.querySelector("#start");
const reset = document.querySelector("#reset");
const stop = document.querySelector("#stop");

let timer = null;
let seconds = 0;

function updateTime() {
    time.textContent = seconds;
}

function startButton() {
    clearInterval(timer);
    timer = setInterval(() => {
        seconds++;
        updateTime();
    }, 1000);
}

function stopButton() {
    clearInterval(timer);
    updateTime();
}

function resetButton() {
    clearInterval(timer);
    seconds = 0;
    updateTime();
}

start.addEventListener("click" , startButton);
reset.addEventListener("click" , resetButton);
stop.addEventListener("click" , stopButton);


const requestCharacters = new XMLHttpRequest()

requestCharacters.open("GET","../data/characters.json")
requestCharacters.setRequestHeader("Content-type", "application/json")
requestCharacters.send()
requestCharacters.onload = () => {
    const characters = JSON.parse(requestCharacters.responseText);
    const charactersBlock = document.querySelector(".characters-list");

    characters.forEach(character => {
        const block = document.createElement("div");
        block.setAttribute("class", "character-item");

        const img = document.createElement("img");
        img.setAttribute("src", character.imageUrl);

        const name = document.createElement("h2");
        name.textContent = character.name;

        const age = document.createElement("h3");
        age.textContent = character.age;

        block.appendChild(img);
        block.appendChild(name);
        block.appendChild(age);

        charactersBlock.appendChild(block);
    });
};


const request = new XMLHttpRequest()
request.open("GET","../data/any.json")
request.setRequestHeader("Content-type", "application/json")
request.send()
request.onload = () => {
    console.log(JSON.parse(request.response))
}



