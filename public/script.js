
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        const imgID = card.getAttribute("id");
        modalOverlay.classList.add("active");
        modalOverlay.querySelector("img").src =  `/assets/${imgID}`
    }) 
}











