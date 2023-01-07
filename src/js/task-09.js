function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(".change-color");
const spanEL = document.querySelector(".color");
const bodyEL = document.querySelector("body");

buttonEl.addEventListener("click", handleButtonClick);

function handleButtonClick(element) {
	const randomColor = getRandomHexColor();
	console.log(randomColor);
	bodyEL.style.backgroundColor = randomColor;
	spanEL.textContent = randomColor;
}
