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
const move = document.querySelector(".child_block");
const countFunction = () => {
    num++
    move.style.left = num + "px";
    if (num <= 447) {
        requestAnimationFrame(countFunction)
    }
}
countFunction()