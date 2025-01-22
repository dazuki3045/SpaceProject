// PHONE CHECKER

const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = "OK"
        phoneResult.style.color = "green"
    } else {
        phoneResult.innerHTML = "NoT OK"
        phoneResult.style.color = "red"
    }
}

const tabContentBlocks = document.querySelectorAll(".tab_content_block")
const tabContentItems = document.querySelectorAll(".tab_content_item")
const tabsParent = document.querySelector(".tab_content_items")
let number = 0;
let interval;

const hideTabContent = () => {
    tabContentBlocks.forEach(item => {
        item.style.display = "none"
    })
    tabContentItems.forEach(item => {
        item.classList.remove("tab_content_item_active")
    })
}

const showTabContent = (i) => {
    tabContentBlocks[i].style.display = "block"
    tabContentItems[i].classList.add("tab_content_item_active")
}

const slide = () => {
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => {
        number = (number + 1) % tabContentBlocks.length;
        hideTabContent();
        showTabContent(number);
    }, 3000);
}

hideTabContent();
showTabContent(0);
slide();

tabsParent.onclick = (event) => {
    if (event.target.classList.contains("tab_content_item")) {
        tabContentItems.forEach((item, i) => {
            if (event.target === item) {
                number = i;
                hideTabContent();
                showTabContent(i);
                slide();
            }
        })
    }
}


const somInput = document.querySelector("#som")
const usdInput = document.querySelector("#usd")
const eurInput = document.querySelector("#eur")


const converter = (element, targetElement, targetElement1) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET","../data/converter.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.onload = () => {
            const data = JSON.parse(request.response)
            if (element.id === "som") {
                targetElement.value = (element.value / data.som).toFixed(2);
                targetElement1.value = (element.value / (data.som / data.eur)).toFixed(2);
            }
            if (element.id === "usd") {
                targetElement.value = (element.value * data.som).toFixed(2);
                targetElement1.value = (element.value * data.eur).toFixed(2);
            }
            if (element.id === "eur") {
                targetElement.value = (element.value * (data.som / data.eur)).toFixed(2);
                targetElement1.value = (element.value * (1 / data.eur)).toFixed(2);
            }
        }
    }
}

converter(somInput, usdInput, eurInput)
converter(usdInput, somInput, eurInput)
converter(eurInput, somInput, usdInput)

//CARD SWITCHER

const btnNext = document.querySelector("#btn-next")
const btnPrev = document.querySelector("#btn-prev")
const cardBlock = document.querySelector(".card")

let todoId = 1
const max = 200;

function update(id) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(data => {
            cardBlock.innerHTML = `
                <p>${data.title}</p>
                <p>${data.completed}</p>
                <span>${data.id}</span>
            `;
        });
}

btnNext.onclick = function() {
    if (todoId < max) {
        todoId++;
    } else {
        todoId = 1;
    }
    update(todoId);
};

btnPrev.onclick = function() {
    if (todoId > 1) {
        todoId--;
    } else {
        todoId = max;
    }
    update(todoId);
};

update(todoId);

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })