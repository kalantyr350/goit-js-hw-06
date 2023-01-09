const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ul = document.getElementById("ingredients");

const ingredientMAp = ingredients.map(ingredient => {
	const createLI = document.createElement("li");
	createLI.textContent = ingredient;
	createLI.classList.add("item");

	return createLI;
});

ul.append(...ingredientMAp);
console.log(ul);
