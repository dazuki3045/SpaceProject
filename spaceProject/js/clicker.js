console.log("clicker")

const button =document.querySelector("#btn");
const countClick =document.querySelector("#countClick");
const countPower =document.querySelector("#countPower");
const upgradeX2 =document.querySelector("#upgradeX2");
const upgradeX3 =document.querySelector("#upgradeX3");
const upgradeX4 =document.querySelector("#upgradeX4");
const upgradeX5 =document.querySelector("#upgradeX5");
const upgradeX10 =document.querySelector("#upgradeX10");
const upgradePlus2 =document.querySelector("#upgradePlus2");
const upgradePlus5 =document.querySelector("#upgradePlus5");
const upgradePlus10 =document.querySelector("#upgradePlus10");
const upgradePlus20 =document.querySelector("#upgradePlus20");
const upgradePlus100 =document.querySelector("#upgradePlus100");


let clicks = 0;
let clickPower = 1;
let upgradeCost5 = 5;
let upgradeCost10 = 10;
let upgradeCost20 = 20;
let upgradeCost30 = 30;
let upgradeCost50 = 50;
let upgradeCost500X2 = 500;
let upgradeCost1000X3 = 1000;
let upgradeCost2000X4 = 2000;
let upgradeCost3000X5 = 3000;
let upgradeCost5000X10 = 5000;


const onClick = () => {
    countClick.innerText = clicks + clickPower;
    clicks = clicks + clickPower;
}
const plus2 = () => {
    if (clicks >= upgradeCost5) {
        clicks = clicks - upgradeCost5;
        clickPower += 2;
        countClick.innerText = clicks;
        countPower.innerText = clickPower;
    }
}
const plus5 = () => {
    if (clicks >= upgradeCost10) {
        clicks = clicks - upgradeCost10;
        clickPower += 5;
        countClick.innerText = clicks;
        countPower.innerText = clickPower;
    }
}
const plus10 = () => {
    if (clicks >= upgradeCost20) {
        clicks = clicks - upgradeCost20;
        clickPower += 10;
        countClick.innerText = clicks;
        countPower.innerText = clickPower;
    }
}
const plus20 = () => {
    if (clicks >= upgradeCost30) {
        clicks = clicks - upgradeCost30;
        clickPower += 20;
        countClick.innerText = clicks;
        countPower.innerText = clickPower;
    }
}
const plus100 = () => {
    if (clicks >= upgradeCost50) {
        clicks = clicks - upgradeCost50;
        clickPower += 100;
        countClick.innerText = clicks;
        countPower.innerText = clickPower;
    }
}
const X2 = () => {
    if (clicks >= upgradeCost500X2) {
        clicks = clicks - upgradeCost500X2;
        clickPower *= 2;
        countClick.innerText = clicks;
        countPower.innerText = clickPower;
    }
}
const X3 = () => {
    if (clicks >= upgradeCost1000X3) {
        clicks = clicks - upgradeCost1000X3;
        clickPower *= 3;
        countClick.innerText = clicks;
        countPower.innerText = clickPower;
    }
}
const X4 = () => {
    if (clicks >= upgradeCost2000X4) {
        clicks = clicks - upgradeCost2000X4;
        clickPower *= 4;
        countClick.innerText = clicks;
        countPower.innerText = clickPower;
    }
}
const X5 = () => {
    if (clicks >= upgradeCost3000X5) {
        clicks = clicks - upgradeCost3000X5;
        clickPower *= 5;
        countClick.innerText = clicks;
        countPower.innerText = clickPower;
    }
}
const X10 = () => {
    if (clicks >= upgradeCost5000X10) {
        clicks = clicks - upgradeCost5000X10;
        clickPower *= 10;
        countClick.innerText = clicks;
        countPower.innerText = clickPower;
    }
}

button.addEventListener("click" , onClick);
upgradePlus2.addEventListener("click" , plus2);
upgradePlus5.addEventListener("click" , plus5);
upgradePlus10.addEventListener("click" , plus10);
upgradePlus20.addEventListener("click" , plus20);
upgradePlus100.addEventListener("click" , plus100);
upgradeX2.addEventListener("click" , X2);
upgradeX3.addEventListener("click" , X3);
upgradeX4.addEventListener("click" , X4);
upgradeX5.addEventListener("click" , X5);
upgradeX10.addEventListener("click" , X10);