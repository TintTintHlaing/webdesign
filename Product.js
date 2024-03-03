//For Product Page
const btns = document.querySelectorAll(".sidelink button");
const cards = document.querySelectorAll(".card");
for (let i = 1; i< btns.length; i++) {
	btns[i].addEventListener("click", filterCards)
}
function filterCards(e) {
	cards.forEach(cards = >{
		cards.style.display = "block";
		const cardType = card.dataset.info;
		const btnsType = e.target.dataset.btn;
		if (cardType !== btnsType) {
			card.style.display = "none";
		}
	})
}
btns[0].addEventListener("click", (e) = > {
	cards.forEach(card => {
		card.style.display = "block";
	})
})