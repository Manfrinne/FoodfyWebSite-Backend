const cards = document.querySelectorAll(".card")

for (let card of cards) {
    card.addEventListener("click", function() {
        
        const urlID = card.getAttribute("number")

        window.location.href = `/recipes/${urlID}`
    });
};











