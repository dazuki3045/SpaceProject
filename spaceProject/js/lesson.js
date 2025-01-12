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
