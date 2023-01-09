let counterValue = 0;
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const valueSpan = document.querySelector("#value");
function increment() {
	return (counterValue += 1);
}
function decrement() {
	return (counterValue -= 1);
}
// const decrements = counterValue => (counterValue -= 1);

btnDecrement.addEventListener("click", function () {
	console.log("click decrement");
	decrement();
	return (valueSpan.textContent = counterValue);
});
btnIncrement.addEventListener("click", function () {
	console.log("click increment");
	increment();
	return (valueSpan.textContent = counterValue);
});
