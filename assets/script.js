const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

const dotsContainer = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {

	const dot = document.createElement("div");

	dot.classList.add("dot");

	if (i === 0) {
		dot.classList.add("dot_selected");
	}

	dotsContainer.appendChild(dot);

}

let currentSlide = 0;

function showSlide(index){

	const image = document.querySelector(".banner-img");
	const texte = document.querySelector("#banner p");

	image.src = "./assets/images/slideshow/" + slides[index].image;
	texte.innerHTML = slides[index].tagLine;

	const dots = document.querySelectorAll(".dot");

dots.forEach((dot, i) => {

	if (i === index) {
		dot.classList.add("dot_selected");
	} else {
		dot.classList.remove("dot_selected");
	}

});

}

arrowRight.addEventListener("click", function () {

	currentSlide++;

	if (currentSlide > slides.length - 1) {
		currentSlide = 0;
	}

	showSlide(currentSlide);

});

arrowLeft.addEventListener("click", function () {

	currentSlide--;

	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
	}

	showSlide(currentSlide);

});
