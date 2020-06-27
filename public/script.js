

const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        const imgID = card.getAttribute("id");
        modalOverlay.classList.add("active");
        modalOverlay.querySelector("img").src =  `/assets/${imgID}`

        const numId = card.getAttribute("itemid")

        const plateName = document.getElementById(`plate${numId}`).innerHTML;
        document.getElementById("plateModal").innerHTML = plateName;

        const cookerName = document.getElementById(`cooker${numId}`).innerHTML;
        document.getElementById("cookerModal").innerHTML = cookerName;
    }) 
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove("active");
})









