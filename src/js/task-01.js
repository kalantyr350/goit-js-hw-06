const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

categories.forEach(items => {
	const title = items.firstElementChild.textContent;
	console.log(`Category:`, title);
	const Elements = items.lastElementChild.children.length;
	console.log("Elements:", Elements);
});
