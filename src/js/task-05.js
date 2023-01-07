const input = document.querySelector("#name-input");
console.log(input);
const output = document.querySelector("#name-output");
console.log(output);

input.addEventListener("input", event => {
	event.preventDefault();
	if (event.currentTarget.value !== "") {
		return (output.textContent = event.currentTarget.value);
	}
	return (output.textContent = "Anonymous");
});
