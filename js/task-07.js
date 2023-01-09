const inputEl = document.getElementById("font-size-control");
const spanEl = document.getElementById("text");
inputEl.addEventListener("input", rangeInput);

function rangeInput() {
	if (inputEl.max > inputEl.value && inputEl.min < inputEl.value) {
		return (spanEl.style.fontSize = inputEl.value + "px");
	}
}
