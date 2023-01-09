const inputEl = document.getElementById("validation-input");
console.log(inputEl);

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
	if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
		inputEl.classList.add("valid");
		inputEl.classList.remove("invalid");
	} else if (event.currentTarget.value.length !== Number(inputEl.dataset.length)) {
		inputEl.classList.remove("valid");
		inputEl.classList.add("invalid");
	}
}
