const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmitForm);

function handleSubmitForm(event) {
	event.preventDefault();
	const {
		elements: { email, password },
	} = event.currentTarget;

	if (email.value.trim === "" || password.value === "") {
		return alert("Please fill in all the fields!");
	}

	const userDetails = { email: email.value, Password: password.value };
	console.log(userDetails);
	event.currentTarget.reset();
}
