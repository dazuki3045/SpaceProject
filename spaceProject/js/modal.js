// MODAL

console.log("modal")

const modal = document.querySelector(".modal")
const openModalButton = document.querySelector("#btn-get")
const closeModalButton = document.querySelector(".modal_close")


const openModal = () => {
    modal.style.display = "block"
    document.body.style.overflow = "hidden"
}

const closeModal = () => {
    modal.style.display = "none"
    document.body.style.overflow = ""
}

setTimeout(() => openModal(), 10000);


function Scrolling() {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        openModal();
        window.removeEventListener("scroll", Scrolling); // Удаляем обработчик события после первого срабатывания
    }
}

window.addEventListener("scroll", Scrolling);

openModalButton.onclick = openModal
closeModalButton.onclick = closeModal
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}


