async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        const cardContainer = document.querySelector("#card");

        data.forEach(post => {
            const card = document.createElement("div");
            card.classList.add("card");

            const img = document.createElement("img");
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-OTdsKcPtL1QxPsbSW9T2-PvXnw9t9r3Sw&s";

            const title = document.createElement("h3");
            title.classList.add("title");
            title.textContent = post.title;

            const description = document.createElement("div");
            description.classList.add("description");
            description.textContent = post.body;

            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(description);

            cardContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Ошибка:", error);
    }
}
fetchPosts();