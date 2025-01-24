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


const somInput = document.querySelector("#som");
const usdInput = document.querySelector("#usd");
const eurInput = document.querySelector("#eur");

const converter = (element, targetElement, targetElement1) => {
    element.oninput = async () => {
        try {
            const response = await fetch("../data/converter.json");
            const data = await response.json();
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
        } catch (error) {
            console.error("Ошибка загрузки данных:", error);
        }
    };
};

converter(somInput, usdInput, eurInput);
converter(usdInput, somInput, eurInput);
converter(eurInput, somInput, usdInput);

//CARD SWITCHER

const btnNext = document.querySelector("#btn-next");
const btnPrev = document.querySelector("#btn-prev");
const cardBlock = document.querySelector(".card");

let todoId = 1;
const max = 200;

async function update(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const data = await response.json();
        cardBlock.innerHTML = `
      <p>${data.title}</p>
      <p>${data.completed}</p>
      <span>${data.id}</span>
    `;
    } catch (error) {
        console.error("Ошибка", error);
    }
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

async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Ошибка загруки данных", error);
    }
}

fetchPosts();

// weather


const searchButton = document.querySelector("#search")
const searchInput = document.querySelector(".cityName")
const temp = document.querySelector(".temp")
const city = document.querySelector(".city")

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'

searchButton.onclick = () => {
    if (searchInput.value === ''){
        city.innerHTML = 'Введите название города'
        temp.innerHTML = ''
        city.style.color = 'red'
        return
    }
    fetch(`${BASE_URL}?q=${searchInput.value}&appid=${API_KEY}&units=metric&lang=ru`)
        .then(response => response.json())
        .then(data => {
            city.innerHTML = data.name || 'Город не найден...'
            temp.innerHTML = data.main?.temp ? Math.round(data.main?.temp) + '°С' : ''
            city.style.color = 'white'
        })
    searchInput.value = ''
}